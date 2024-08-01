import HeadingBig from "../Heading";
import ShowProject from "../Show Project/ShowProject";




export default function SelectedWork(){

    return(
        <div className="SELECTED_WORK flex flex-col min-h-screen pb-[150px]">
            <div className="SELECTED_WORK_HEADING text-right relative place-self-end right-0 leading-[130px]  font-bold w-[500px]">
            <HeadingBig content='Selected Work' size={127}  />
            </div>
            
            <ShowProject side='right' H1='TEDx' H2='DAVV' H1Font='700' H2Font='300' H1Color='0EFFE2' H2Color='fff' height='450'
                        content = 'Design and Development for the central India’s largest university’s event, TEDxDAVV'
                        IMAGE='https://imgur.com/tyPwF4O'
            />

            <ShowProject side='left' H1='StudyGraha' H2='' H1Font='700' H2Font='' H1Color='FFF6E9' H2Color='' height='450' width='400'
                        content = 'New MERN project under work. Its a full stack project of a web platform for online learning courses'
                        IMAGE='https://imgur.com/iRC9siW'
            />

            <ShowProject side='right' H1='Weather App' H2='' H1Font='700' H2Font='' H1Color='B39102' H2Color='' height='600'
                        content = 'This weather application works with openWeather API. A simple application to learn about fetch API'
                        IMAGE='https://imgur.com/sQnAAVT'
            />
            
        </div>
    )
}