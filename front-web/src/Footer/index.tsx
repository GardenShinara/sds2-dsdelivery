import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as GithubIcon } from './github.svg';

function Footer() {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior<br/>
            e realizado posteriormente pela desenvolvedora Shinara Jardim.
        <div className="footer-icons">
            <a href="https://www.youtube.com/devsuperior" target="_new" ><YoutubeIcon/></a>
            
            <a href="https://www.linkedin.com/in/shinara-jardim-380728212/" target="_new" ><LinkedinIcon/></a>
            
            <a href="https://github.com/GardenShinara" target="_new" ><GithubIcon/></a>
        </div>
        </footer>
    )
}

export default Footer;