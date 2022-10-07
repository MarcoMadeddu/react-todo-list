import {Header} from '../components/Header'
import {Main} from '../components/Main'
import {Footer} from '../components/Footer'

export function MyApp(){
    return(
        <div className="my-app" style ={{border:'1px solid black'}}>
            <div className="container">
                <Header></Header>
                <Main></Main>
                <Footer></Footer> 
            </div>
        </div>   
    );
}