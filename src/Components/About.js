import about from './Images/about.jpg'
export default function About(){
    return(
        <>
            <div className="about pt-5">
                <div className="container pt-5">
                    <h1>About US</h1>
                    <div className="row pt-5">
                        <div className="col-lg-8">
                            <p>Junior Front End developer, I am proficient in a variety of platforms and systems. In addition to my technical skills, I am a great communicator and team player. My ability to communicate well enables me to work effectively with clients to identify objectives and requirements for applications.</p>
                        </div>
                        <div className="col-lg-4">
                            <img src={about} alt='...'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}