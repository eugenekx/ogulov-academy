import {useState} from 'react'
import ArrowDown from './ArrowDown';

export const CourseDescription = ({children}) => {
    const [isMoreShown, setMoreShown] = useState(false);
    const toggleBtn = () => {
        setMoreShown(prevState => !prevState)
    };

    return (
        <div className='xl:text-xl my-28 lg:text-l xl:max-w-screen-xl lg:max-w-screen-lg text-m font-proxima mx-auto px-4'>
            <h2 className='xl:text-2xl text-xl text-center font-mabry mb-10'>О КУРСЕ</h2>
            <div className='mask'>
                <p>Самая востребованная и популярная техника массажа Александра Ермолаева на рынке России, СНГ и Зарубежья. Авторская массажная технология.</p>
                <ul className='list-disc list-inside'>Какой эффект:
                    <li>Ярко выраженный результат уже после первой процедуры.</li>
                    <li>Морщин станет меньше.</li>
                    <li>Улучшится цвет лица.</li>
                    <li>Повысится тонус мышц лица и шеи – лифтинг эффект.</li>
                    <li>Станет четким овал лица.</li>
                    <li>Восстановится угол молодости лица и уберется двойной подбородок.</li>
                    <li>Снимется стресс и утомление с мимической мускулатуры.</li>
                    <li>Появится хорошее настроение, ощущение бодрости, чувство легкости и уверенности в себе.</li>
                </ul> 
            </div>
            <button onClick={toggleBtn} className='xl:my-5 flex items-center font-mabry my-2 uppercase'>Читать полностью
            <div className='xl:w-12 xl:h-12 lg:w-10 lg:h-10 w-6 h-6'><ArrowDown rotation={isMoreShown ? 180 : 0} /></div>
            </button>
        </div>
    )
}
