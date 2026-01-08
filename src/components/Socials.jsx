import '../styles/components/Socials.css';

const Socials = () => (

    <div class="social-container">
        {/* Email Icon */}
        <div class="icon">
            <a href="mailto:ethanganca@gmail.com">
            <i class="fa-solid fa-envelope"></i>
            </a>
            {/* <span>Email</span> */}
        </div>

        {/* Linkedin Icon */}
        <div class="icon">
            <a href="https://www.linkedin.com/in/ethan-x-gan/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>

        {/* Github Icon */}
        <div class="icon">

            <a href="https://github.com/Ethan-Gan/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
            </a>
            
        </div>

    </div>
    
);

export default Socials;
