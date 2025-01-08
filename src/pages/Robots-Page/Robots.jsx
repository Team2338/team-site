import './Robots.scss';
import {
    ArrowBack,
    ArrowForward
} from '@mui/icons-material';
import {useState} from "react";

function Robots(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            title: "Zephyr",
            img: "Bots/2023bot.jpg",
            desc: "Charged Up",
            imgDesc: ""
        },
        {
            title: "Viper",
            img: "Bots/mickschumi.jpg",
            desc: "Michael is a sellout",
            imgDesc: "t"
        },
        {
            title: "Prowler",
            img: "Bots/yewre.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Vanguard",
            img: "Bots/rembo.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Chef",
            img: "Bots/yesrer.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Flatline",
            img: "Bots/flynn.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Flynn Rider",
            img: "Bots/2016bot.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Phantom",
            img: "Bots/patrick2015.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        },
        {
            title: "Fumper",
            img: "Bots/2014bot.jpg",
            desc: "Michael is a sellout",
            imgDesc: ""
        }
    ]

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="Robots" id="robots">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw` }}
            > 
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt={d.imgDesc} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowBack
                className="arrow left"
                onClick={() => handleClick("left")}
            />
            <ArrowForward
                className="arrow right"
                onClick={() => handleClick()}
            />
        </div>
    );
}

export default Robots;