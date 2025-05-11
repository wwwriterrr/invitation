import { ChangeEventHandler, type FormEventHandler, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Checkbox } from '../../checkbox';
import { useAppDispatch, useAppSelector } from '../../../services/store';
import { getUser } from '../../../services/auth/slice';
import { LoaderIcon } from '../../icons/loader';
import { FormSuccess } from './success';
import { NotWillBe } from './notWillBe';
import { TGuestData } from '../../../core/type';
import { sendUserData } from '../../../services/auth/actions';

export type TFormData = TGuestData;

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
    const nameRef = useRef<HTMLInputElement>(null);
    const childrenRef = useRef<HTMLInputElement>(null);

    const user = useAppSelector(getUser)!;

    const dispatch = useAppDispatch();

    const [load, setLoad] = useState<boolean>(false);

    const [data, setData] = useState<TFormData>(user.data);

    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault();

        setLoad(true);
        // setTimeout(() => {
        //     setLoad(false);
        //     setData({...data, formSend: true});
        // }, 3000);
        dispatch(sendUserData({token: user.token, data}))
            .then(action => {
                if(action.type === sendUserData.fulfilled.type){
                    setData({...data, formSend: true});
                }
            })
            .finally(() => setLoad(false))
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

        if(data.alcohol?.includes(input.value)){
            const oldAlco = Array.from(data.alcohol);
            const index = oldAlco.indexOf(input.value);
            oldAlco.splice(index, 1);
            setData({...data, alcohol: oldAlco});
        }else{
            setData({...data, alcohol: [...data.alcohol || [], input.value]});
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

        setData({...data, vineType: vineRef.current.value});
    }

    const currentChangeHandler = () => {
        if(!currentRef.current) return;

        setData({...data, currentAlcohol: currentRef.current.value});
    }

    const nameChangeHandler = () => {
        if(!nameRef.current) return;

        setData({...data, name: nameRef.current.value});
    }

    const childrenSelectChangeHandler: ChangeEventHandler<HTMLInputElement> = () => {
        if(data.childrenSelect){
            setData({...data, childrenSelect: false});
        }else{
            setData({...data, childrenSelect: true});
        }
    }

    const childrenCountChangeHandler = () => {
        if(!childrenRef.current) return;

        setData({...data, childrenCount: childrenRef.current.value});
    }

    return (
        <div className={styles.wrap}>
            {data.formSend ? (
                <FormSuccess data={data} dataSetter={setData} />
            ) : (
                <>
                    <h2 className={styles.title}>Анкета</h2>
                    <div className={styles.beforeText}>А теперь мы хотим задать вам несколько вопросов:</div>
                    <form className={`${styles.form} ${load ? styles.formLoad : ''}`} onSubmit={submitHandler}>
                        <div className={styles.row}>
                            <div className={styles.formText}>Подтвердите своё присутствие:</div>
                            <Checkbox name={'agree'} type={'radio'} value={'yes'} label={'Я приеду'} changeHandler={agreeChangeHandler} checked={data.willBe} iconFill={'#e6d5a1'} />
                            <Checkbox name={'agree'} type={'radio'} value={'no'} label={'Не смогу приехать'} changeHandler={agreeChangeHandler} checked={!data.willBe} iconFill={'#e6d5a1'} />
                        </div>
                        {data.willBe ? (
                            <>
                                {!user ? (
                                    <div className={`${styles.row} ${styles.inputRow}`}>
                                        <div className={styles.inputText}>Укажите Ваше имя</div>
                                        <input 
                                            ref={nameRef}
                                            className={styles.input}
                                            name={'name'}
                                            value={data.name}
                                            onChange={nameChangeHandler}
                                        />
                                    </div>
                                ) : null}
                                <div className={styles.row}>
                                    <div className={styles.formText}>Какой алкоголь Вы предпочитаете?</div>
                                    {(data.alcohol?.includes('current') ? ['current'] : AlcoholList).map((item, i) => (
                                        <Checkbox 
                                            key={`alcohol-${i}`}
                                            name={'alcohol'} 
                                            type={'checkbox'} 
                                            value={item}
                                            label={AlcoTranslate(item)}
                                            changeHandler={alcoholChangeHandler}
                                            checked={data.alcohol?.includes(item)}
                                            iconFill={'#e6d5a1'}
                                        />
                                    ))}
                                </div>
                                {data.alcohol?.includes('vine') && !data.alcohol.includes('current') ? (
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
                                            placeholder={'Например: красное полусухое'}
                                        />
                                    </div>
                                ) : null}
                                {data.alcohol?.includes('current') ? (
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
                                            placeholder={'Например: рисовая водка из Тайланда'}
                                        />
                                    </div>
                                ) : null}
                                {!user?.data.local ? (
                                    <div className={styles.row}>
                                        <div className={styles.formText}>
                                            Мы забронировали дом для гостей. Потребуется ли вам размещение?
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
                                ) : null}
                                {data.hideChildren ? null : (
                                    <>
                                        <div className={styles.row}>
                                            <div className={styles.formText}>
                                                Отметьте флажок, если вы будете с детьми:
                                            </div>
                                            <Checkbox 
                                                name={'children_select'} 
                                                type={'checkbox'} 
                                                value={'yes'}
                                                label={'С детьми'}
                                                changeHandler={childrenSelectChangeHandler}
                                                checked={data.childrenSelect}
                                                iconFill={'#e6d5a1'}
                                            />
                                        </div>
                                        {data.childrenSelect ? (
                                            <div className={`${styles.row} ${styles.inputRow}`}>
                                                <div className={styles.inputText}>
                                                    Укажите количество детей и их возраст:
                                                </div>
                                                <input 
                                                    className={styles.input} 
                                                    ref={childrenRef} 
                                                    name={'children_count'} 
                                                    value={data.childrenCount} 
                                                    onChange={childrenCountChangeHandler}
                                                    placeholder={'Например: 2 детей, 7 и 14 лет'}
                                                />
                                            </div>
                                        ) : null}
                                    </>
                                )}
                                <div className={styles.row}>
                                    <button type={'submit'} disabled={load}>
                                        {load ? (
                                            <>
                                                <span>Отправка</span>
                                                <LoaderIcon size={34} fill={'#716c66'} />
                                            </>
                                        ) : (
                                            <span>Отправить анкету</span>
                                        )}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <NotWillBe />
                        )}
                    </form>
                </>
            )}
        </div>
    )
}
