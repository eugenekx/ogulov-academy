import {useState} from 'react'
import ArrowDown from './ArrowDown';

export const CourseDescription = ({children}) => {
    const [isMoreShown, setMoreShown] = useState(false);
    const toggleBtn = () => {
        setMoreShown(prevState => !prevState)
    };

    return (
        <div className='max-w-screen-xl font-proxima text-l my-14 mx-auto'>
            <h2 className='text-2xl text-center font-mabry my-14'>О КУРСЕ</h2>
            <div className='mask'>
               <p>Самая востребованная и популярная техника массажа Александра Ермолаева на рынке России, СНГ и Зарубежья. Авторская массажная технология.</p>
            <ol>Какой эффект:
                <li>Ярко выраженный результат уже после первой процедуры.</li>
                <li>Морщин станет меньше.</li>
                <li>Улучшится цвет лица.</li>
                <li>Повысится тонус мышц лица и шеи – лифтинг эффект.</li>
                <li>Станет четким овал лица.</li>
                <li>Восстановится угол молодости лица и уберется двойной подбородок.</li>
                <li>Снимется стресс и утомление с мимической мускулатуры.</li>
                <li>Появится хорошее настроение, ощущение бодрости, чувство легкости и уверенности в себе.</li>
            </ol> 
            </div>
            <button onClick={toggleBtn} className='flex items-center font-mabry my-5'>ЧИТАТЬ ПОЛНОСТЬЮ
            <ArrowDown rotation={isMoreShown ? 180 : 0} />
            </button>
        </div>
    )
}
