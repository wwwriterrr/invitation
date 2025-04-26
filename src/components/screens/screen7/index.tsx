import { ChangeEventHandler, type FormEventHandler, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Checkbox } from '../../checkbox';

type TFormData = {
    willBe: boolean,
    alcohol: string[],
    vineType?: string,
    currentAlcohol?: string,
    placement?: boolean,
}

const AlcoTranslate = (name: string) => {
    const dict: {[key in string]: string} = {
        vine: 'вино',
        whiskey: 'виски',
        vodka: 'водка',
        current: 'свой вариант',
    }
    return dict[name] || name;
}

const AlcoholList: string[] = [
    'current',
    'vine',
    'whiskey',
    'vodka',
]

export const Screen7 = () => {
    const vineRef = useRef<HTMLInputElement>(null);
    const currentRef = useRef<HTMLInputElement>(null);

    const [data, setData] = useState<TFormData>({
        willBe: true,
        alcohol: [],
    })

    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault();
    }

    const agreeChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const input: HTMLInputElement = e.target;
        if(input.value === 'yes'){
            setData({...data, willBe: true});
        }else{
            setData({...data, willBe: false});
        }
    }

    const alcoholChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const input: HTMLInputElement = e.target;

        if(data.alcohol.includes(input.value)){
            const oldAlco = Array.from(data.alcohol);
            const index = oldAlco.indexOf(input.value);
            oldAlco.splice(index, 1);
            setData({...data, alcohol: oldAlco});
        }else{
            setData({...data, alcohol: [...data.alcohol, input.value]});
        }
    }

    const placementChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const input: HTMLInputElement = e.target;

        if(input.value === 'yes'){
            setData({...data, placement: true});
        }else{
            setData({...data, placement: false});
        }
    }

    const vineChangeHandler = () => {
        if(!vineRef.current) return;

        data.vineType = vineRef.current.value;
    }

    const currentChangeHandler = () => {
        if(!currentRef.current) return;

        data.vineType = currentRef.current.value;
    }

    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Анкета</h2>
            <div className={styles.beforeText}>А теперь мы хотим задать вам несколько вопросов:</div>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.row}>
                    <div className={styles.formText}>Подтвердите своё присутствие:</div>
                    <Checkbox name={'agree'} type={'radio'} value={'yes'} label={'Я приеду'} changeHandler={agreeChangeHandler} checked={data.willBe} iconFill={'#e6d5a1'} />
                    <Checkbox name={'agree'} type={'radio'} value={'no'} label={'Не смогу приехать'} changeHandler={agreeChangeHandler} checked={!data.willBe} iconFill={'#e6d5a1'} />
                </div>
                {data.willBe ? (
                    <>
                        <div className={styles.row}>
                            <div className={styles.formText}>Какой алкоголь Вы предпочитаете?</div>
                            {(data.alcohol.includes('current') ? ['current'] : AlcoholList).map((item, i) => (
                                <Checkbox 
                                    key={`alcohol-${i}`}
                                    name={'alcohol'} 
                                    type={'checkbox'} 
                                    value={item}
                                    label={AlcoTranslate(item)}
                                    changeHandler={alcoholChangeHandler}
                                    checked={data.alcohol.includes(item)}
                                    iconFill={'#e6d5a1'}
                                />
                            ))}
                        </div>
                        {data.alcohol.includes('vine') && !data.alcohol.includes('current') ? (
                            <div className={`${styles.row} ${styles.inputRow}`}>
                                <div className={styles.inputText}>
                                    Какое вино вы предпочитаете?
                                </div>
                                <input 
                                    className={styles.input} 
                                    ref={vineRef} 
                                    name={'vine_type'} 
                                    value={data.vineType} 
                                    onChange={vineChangeHandler}
                                    placeholder={'Красное полусухое'}
                                />
                            </div>
                        ) : null}
                        {data.alcohol.includes('current') ? (
                            <div className={`${styles.row} ${styles.inputRow}`}>
                                <div className={styles.inputText}>
                                    Укажите, какой алкоголь вы предпочитаете?
                                </div>
                                <input 
                                    className={styles.input} 
                                    ref={currentRef} 
                                    name={'currentAlcohol'} 
                                    value={data.currentAlcohol} 
                                    onChange={currentChangeHandler}
                                    placeholder={'Рисовая водка из Тайланда'}
                                />
                            </div>
                        ) : null}
                        <div className={styles.row}>
                            <div className={styles.formText}>
                                Мы забронировали дом для гостей, находящийся в 15 минутах ходьбы от ресторана. Потребуется ли вам размещение?
                            </div>
                            <Checkbox 
                                name={'placement'} 
                                type={'checkbox'} 
                                value={'yes'}
                                label={'Да, потребуется'}
                                changeHandler={placementChangeHandler}
                                checked={data.placement}
                                iconFill={'#e6d5a1'}
                            />
                            <Checkbox 
                                name={'placement'} 
                                type={'checkbox'} 
                                value={'no'}
                                label={'Нет, не потребуется'}
                                changeHandler={placementChangeHandler}
                                checked={!data.placement}
                                iconFill={'#e6d5a1'}
                            />
                        </div>
                        <div className={styles.row}>
                            <button type={'submit'}>Отправить анкету</button>
                        </div>
                    </>
                ) : (
                    <div className={'notWillBe'}>
                        Нам очень жаль, что вы не сможете приехать. Если Вам не сложно, то мы будем рады видеопоздравлению!
                    </div>
                )}
            </form>
        </div>
    )
}
