import React, {useState, useEffect} from 'react';
import APIURL from '../helpers/environment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Photo1 from '../assets/kiva-photos/666Flags.jpg'
import Photo2 from '../assets/kiva-photos/april.jpg'
import Photo3 from '../assets/kiva-photos/bleach.jpg'
import Photo4 from '../assets/kiva-photos/chiefKelly.jpeg'
import Photo5 from '../assets/kiva-photos/agal.jpg'
import Photo6 from '../assets/kiva-photos/collage.jpeg'
import Photo7 from '../assets/kiva-photos/december.png'
import Photo8 from '../assets/kiva-photos/DTnob.jpg'
import Photo9 from '../assets/kiva-photos/equinox.jpg'
import Photo10 from '../assets/kiva-photos/espy.jpg'
import Photo11 from '../assets/kiva-photos/fashionShow.png'
import Photo12 from '../assets/kiva-photos/agal.jpg'
import Photo13 from '../assets/kiva-photos/agal.jpg'
import Photo14 from '../assets/kiva-photos/agal.jpg'
import Photo15 from '../assets/kiva-photos/agal.jpg'
import Photo16 from '../assets/kiva-photos/agal.jpg'
import Photo17 from '../assets/kiva-photos/agal.jpg'
import Photo18 from '../assets/kiva-photos/agal.jpg'
import Photo19 from '../assets/kiva-photos/agal.jpg'
import Photo20 from '../assets/kiva-photos/agal.jpg'
import Photo21 from '../assets/kiva-photos/agal.jpg'
import Photo22 from '../assets/kiva-photos/agal.jpg'
import Photo23 from '../assets/kiva-photos/agal.jpg'
import Photo24 from '../assets/kiva-photos/agal.jpg'
import Photo25 from '../assets/kiva-photos/agal.jpg'
import Photo26 from '../assets/kiva-photos/agal.jpg'
import './Welcome.css'


const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
      
      


const Welcome = (props) => {
      const [image, setImage] = useState('')
      const [date, setDate] = useState('');
      const [description, setDescription] = useState('')
      const [posts, setPosts] = useState([])
      const classes = useStyles();




// const fetchAll = () => {
//         fetch(`${APIURL}/post/all`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token,
//             }
//         })
//             .then(data => data.json())
//             .then(data => {setPosts(data)})
//             .catch(err => console.warn(err))
            
//     }
    

//     useEffect(() => {fetchAll();}, []);


const pictures = [ 
  Photo1,
  Photo3,  
  Photo4,
  Photo5,         'https://64.media.tumblr.com/a229e52160b998fa809722a6c4be2e6b/cb05468ff38cbf44-e7/s500x750/61c87f5c947b1f42e88c02ab22e82ee0939c027e.jpg',
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo2,
  Photo2,
  Photo2,
        'https://64.media.tumblr.com/fd81c870c49d4019cf0fdb532d320e52/tumblr_pmfbabB0cI1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/b761f296e98f6e0ed2540de0680e47e3/tumblr_pqn8k0IpDt1vukgf0_500.jpg',
        'https://64.media.tumblr.com/8e574ee2b687ded7dcd1525f09e8c8a8/tumblr_pqn8k0To6t1vukgf0_500.jpg',
        'https://64.media.tumblr.com/2b8b74cd0750ff7b79c889ca960eddd0/tumblr_pm84fuJfxf1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/393917435b117c71a98effd3d374d75d/tumblr_pj2tj8kIss1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/99e05f22ab2e7c10a343b091132407d3/tumblr_pj4qyrb8hO1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/0963510b90fab72c11788575c0a631c8/tumblr_pbohz6iLCR1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/833eeaceddabbe643b4ea20f5b7940bd/tumblr_p85lauetGD1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/e05a3688a378d3aaefb025e195f557b9/tumblr_p59aa7FWCh1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/5287bcf9dd0b0370a0dd20fff8410116/tumblr_p8gphz2I4j1wm7nh6o1_540.png',
        'https://64.media.tumblr.com/76bb67add3e524a25baeb3ec23789758/tumblr_p8gphz2I4j1wm7nh6o2_540.png',
        'https://64.media.tumblr.com/c03101a9b7270b79dbf9cfe2532838a4/tumblr_p1fu0tloEs1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/6cdda5b0f186220f502bf410aaf2da05/tumblr_p2jail0eUd1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/ad5306eca63adb715043caff5a3c090b/tumblr_p1fsy2lPKh1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/2f045b56f3db6d8da9d8d408f70793ba/tumblr_p8d07cjxQt1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/fa5df393798afb5c4783d80ea967af9d/tumblr_pm84h18zpO1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/dae2982cec97774fc578fa20d811170e/tumblr_p92x5j3ReU1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/f80e0e6cd885d1d6ddd8eb479b885857/tumblr_p5g0q1zwWD1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/85392dcbe75fd2f913efa853038cc28d/tumblr_pm84h18zpO1wm7nh6o2_1280.jpg',
        'https://64.media.tumblr.com/e0ffa72626232b9de978cf776b7c894d/tumblr_p6evg45kcM1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/2e3ce115bfbc397c4ddc64c0bd1ed0eb/tumblr_p4uca6P30Y1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/0913cd174db3b3a38b96dd04feee488e/tumblr_p5ar7oHSsM1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/2569be5e288af6a2e4e526e1da5c6fc9/tumblr_p2jf0w8MUR1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/e848568a76ed5019b2bcd33e40007f0f/tumblr_p27htxCcup1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/7a691d5c56574abf2069640ff5727e1f/tumblr_p46680aNH81wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/2a808900bcc682e9e0d5bf1409739d1e/tumblr_p1qsteoWTu1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/0285559cb440d84eb23f98413b8650d2/tumblr_p1y6p4z5qX1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/3da279940f674e322a6d2d1b07c4d056/tumblr_p1fsw7H7xs1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/1d595ec692ef9f2b140e3c21a5953235/tumblr_p1gg29TRYR1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/8b3859ff395d6738fbd203065e64dba4/tumblr_p1g8pf7ojC1wm7nh6o1_1280.png',
        'https://64.media.tumblr.com/af25cc73a50d663c46bd697c60548a3f/tumblr_p1fslvQG8l1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/99b36436428945bffcca0daf4a5550fc/tumblr_p1fsp2zG4x1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/3f7c89f3046011fd3e0649545cd127bc/tumblr_p1fsnzKPlo1wm7nh6o1_1280.jpg',
        'https://64.media.tumblr.com/8a8d5bc0c3b96cfaef5ce1728a16f4c4/tumblr_p1fsjrM5Ya1wm7nh6o1_1280.jpg',
]

    
     console.log(posts)

    

const photoStyles = {
    height: '18vh',
    // filter: 'invert(100%)'
    marginLeft: '1vw',
    marginTop: '1vh',
    display: 'block',
}
 
const photoGridStyles = {
marginLeft: '10%',
marginRight: '10%'
}
const altPhotoStyles = {
  marginLeft: '1vw',
  height: '18vh',
  marginTop: '1vh',
  display: 'block',
  alignItems: 'right'
 
}
const altAltPhotoStyles = {
  marginLeft: '1vw',
  height: '18vh',
  marginTop: '1vh',
  display: 'block',

}
const altAltAltPhotoStyles = {
  height: '18vh',
  marginLeft: '1vw',
  marginTop: '1vh',
  display: 'block',

 
}

return(
   <div style={photoGridStyles}>
     <div className={classes.root} >
      <Grid container style={{width: '85%', marginLeft: '10%', marginRight: '10%'}}>
        <Grid item xs={3.5}>
              <img src={pictures[0]} style={altAltAltPhotoStyles} />
        </Grid>
        <Grid item xs={3.5} >
          <img src={pictures[5]} style={altAltPhotoStyles}/>
        </Grid>
        <Grid item xs={3.5}>
         <img src={pictures[2]} style={altPhotoStyles}/>
        </Grid>
          <Grid item xs={3.5}>
            <img src={pictures[3]} style={photoStyles}/>
          </Grid>
          <Grid item xs={3.5}>
            <img src={pictures[4]} style={photoStyles}/>
          </Grid>
          <Grid item xs={3.5}>
            <img src={pictures[2]} style={photoStyles}/>
          </Grid>
          <Grid item xs={3.5}>
          <img src={pictures[18]} style={photoStyles}/> 
        </Grid>
          <Grid item xs={3.5}>
            <img src={pictures[6]} style={photoStyles}/> 
          </Grid>
          <Grid item xs={3.5}>
            <img src={pictures[7]} style={photoStyles}/> 
          </Grid>
          <Grid item xs={3.5}>
            <img src={pictures[8]} style={photoStyles}/> 
          </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[9]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[10]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[11]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[12]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[13]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[21]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[23]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[14]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[15]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[16]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[17]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[19]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[20]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[22]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[24]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[25]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[26]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[27]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[28]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[29]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[30]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[31]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[32]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[33]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[34]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[35]} style={photoStyles}/> 
        </Grid>
        <Grid item xs={3.5}>
          <img src={pictures[36]} style={photoStyles}/> 
        </Grid>
      </Grid>
    </div>
   </div>
    )
}

export default Welcome;
