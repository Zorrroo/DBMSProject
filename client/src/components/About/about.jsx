import Navbar from "/src/components/Navbar/navbar.jsx"
import Footer from "/src/components/Footer/footer.jsx"
import './about.css'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="aboutconatiner">
                <h1 className="aboutheading">The ER diagram</h1>
                <div className="er-model">
                    <div className="er-img-div"></div>
                </div>
                <h1 className="aboutheading">The <i>TEAM</i> members</h1>
                <div className="memberspics">
                <div className="details">
                        <img src="/src/assets/bgmain.webp" alt="yaswanth" className="image-person" />
                        <p>Name: Bellana Yaswanth<br/>Main Work: Web Coder</p>
                    </div>
                    <div className="details">
                        <img src="/src/assets/bgmain.webp" alt="dileep" className="image-person" />
                        <p>Name: Paila Dileep Sai<br />Main Work: UI Design</p>
                    </div>
                    <div className="details">
                        <img src="/src/assets/bgmain.webp" alt="pratham" className="image-person" />
                        <p>Name: Pratham Prajapati Arjun<br />Main Work: Data Set preparation</p>
                    </div>
                    <div className="details">
                        <img src="/src/assets/bgmain.webp" alt="gokul" className="image-person" />
                        <p>Name: K Gokul<br />Main Work: UX designer</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )   
}
export default About