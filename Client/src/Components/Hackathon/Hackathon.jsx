import './Hackathon.css'

export default function Hackathon({logo,hackathonName}){
    return(
        <div className="hackathon">
            <img src={logo} alt={hackathonName} className="logo" />
        </div>
    )
}