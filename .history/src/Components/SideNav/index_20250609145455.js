import './_side-nav.scss';


const SideNav =()=>{

    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>

            </div>

            <div className= 'accordion'>
                <div className= 'accordion-item individual-category'>
                    <div className = 'accordion-header'>
                        <button className='accordion-button'>
                            <div className='category-title'>
                                <a href='#'>Men</a>
                            </div>
                        </button>

                    </div>

                    <div className='accordion-collapse collapse show'>
                        <div className='accordion-body'>
                            <ul className='category-list'>
                                <li><a href='#'>T-Shirts</a></li>
                                <li><a href='#'>Shirts</a></li>
                                <li><a href='#'>Pants</a></li>
                                <li><a href='#'>Shoes</a></li>
                            </ul>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    )

    
}
export default SideNav;