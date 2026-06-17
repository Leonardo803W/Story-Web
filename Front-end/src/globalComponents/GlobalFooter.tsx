const GlobalFooter = () => {
    
    const currentYear = new Date().getFullYear();

    return(
        <>
            <section id = "footer">
                <hr className = "link-light"/>
                <div>
                    <h3>Historia</h3>
                    <p>
                        Scopri la storia dell'umanità attraverso civiltà, invenzioni, battaglie e molto altro.
                    </p>
                </div>

                <div/>
                    <hr className = "link-light"/>
                    <div>
                    <p>
                        &copy; {currentYear} Studenti con le Stellette. Tutti i diritti
                        riservati.
                    </p>
                </div>
            </section>
        </>
    )
}

export default GlobalFooter;