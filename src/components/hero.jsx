const HeroSection = () =>{


    return(
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET <br /> <span> YOUR STYLE</span></h1>
                <p>Handcrafted footwear that blends comfort with fashion. Walk bold, walk confident.</p>
              <div className="hero-btn">
                <button>Shop Now</button>
                <div className="Avlon">
                    <p>Available On</p>
                    <div className="shop-image">
                        <img className="store-icon" src="/images/flipkart.png" alt="Flipkart" />
                        <img className="store-icon" src="/images/amazon.png" alt="Amazon" />
                    </div>
                </div>
              </div>
            </div>
            <div className="hero-image">
               <img className="shoe-image" src="/images/shoe.png" alt="Shoe" />
            </div>
        </main>
    )
}

export default HeroSection;