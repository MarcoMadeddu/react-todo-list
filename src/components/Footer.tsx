export function Footer(){
    return(
        <footer className="bg-light text-center text-lg-start" style = {{flexGrow: '0' , width: "100%"}}>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
}