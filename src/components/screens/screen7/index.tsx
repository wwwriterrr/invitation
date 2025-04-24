import { ChangeEventHandler, type FormEventHandler, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Checkbox } from '../../checkbox';

type TFormData = {
    willBe: boolean,
    alcohol: string[],
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
