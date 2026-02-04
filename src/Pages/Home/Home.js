import "./home.css";
import CategoryCard from "../../Components/Categorycard/CategoryCard";
import categories from "../../Data/Category/category";
import products from "../../Data/Product/productpage";
import { FaWhatsapp, FaInstagram, FaEnvelope ,FaMapMarkerAlt} from "react-icons/fa";

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-text">
                    <h1>Delicious Cakes for Every Occasion</h1>
                    <p>Fresh • Tasty • Customized</p>
                </div>
                <img
                    src="https://www.bettycrocker.co.uk/wp-content/uploads/2023/11/polar-bear-cake-mobile-1.png"
                    alt="cake"
                    className="img"
                />
            </section>

            <section className="section">
                <h1 className="title">Categories</h1>
                <div className="grid">
                    {categories.map(cat => (
                        <CategoryCard key={cat.id} category={cat} />
                    ))}
                </div>
            </section>

            <section className="section">
                <h1 className="title">Featured Products</h1>
                <div className="grid">
                    {products
                        .sort((a, b) => b.featured - a.featured)
                        .map(p => (
                            <div className="product-card" key={p.id}>
                                <img src={p.img} alt={p.name} className="img" />
                                <h3>{p.name}</h3>
                            </div>
                        ))}
                </div>
            </section>

            <section className="section">
                <h1 className="title">Testimonials</h1>
                <p>Our happy customers</p>
                <div className="testimonial-list">
                    <div className="testimonial-card">
                        <p>“The cakes are absolutely delicious! Fresh, beautifully designed, anddelivered on time. Highly recommended.”</p>
                        <h3>Ananya R</h3>
                    </div>
                    <div className="testimonial-card">
                        <p>“Ordered a birthday cake and everyone loved it. Soft, creamy and perfectly sweet. Will order again!”</p>
                        <h3>Rahul K</h3>
                    </div>
                    <div className="testimonial-card">
                        <p>“Amazing service and premium quality cakes. The customization optionsare fantastic.”</p>
                        <h3>Priya S</h3>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <h1 className="title">Contact Us</h1>
                <p className="footer-text"><FaMapMarkerAlt /> Coimbatore, Tamil Nadu</p>
                <p className="footer-text"><FaEnvelope /> cake@shop.com</p>
                <div className="footer-icons">
                    <FaWhatsapp />
                    <FaInstagram />
                    <FaEnvelope />
                </div>
                <p className="copyright">2026 Sweet Treats</p>
            </footer>
        </div>
    );
}
export default Home;
