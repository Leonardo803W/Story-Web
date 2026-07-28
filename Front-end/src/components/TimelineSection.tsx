import { TimeLine } from "../data/Timeline";

const TimelineSection = () => {


    return(
        <>
            <div className="timelineCarousel">
            
                {TimeLine.map((timeline) => (
                    <div key={timeline.id} className="timelineSlide">
            
                        <h3 className = "text-center">
                            Cosa succedeva nel mondo nel {timeline.title}?
                        </h3>
                
                        <section id = "group_line_time">
                            {timeline.content.map((item) => (
                                <div 
                                key={item.id}
                                style={{
                                    backgroundImage: `url(${item.img})`
                                    }}
                                >
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </section>
            
                    </div>
                ))}
            
            </div>
        </>
    )
}

export default TimelineSection