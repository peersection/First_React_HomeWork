
import './persion.css'
const PersionList = (props) =>{
const Persin1 = 'Kevin'
const Persin2 = 'Moshe'
const Persin3 = 'Daviv'


    return (
        <>
 <div className='PersionList'>
     <p>{props.name}</p>
<li>{Persin1}</li>
<li>{Persin2}</li>
<li>{Persin3}</li>
</div>
   </>
    );
}


export default PersionList;