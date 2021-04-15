import React from 'react';
import '../../App.css';
import Card from '../Card';


function Projects(){
    return(
        <div>
            <h3 className='Projects'>Projects</h3>
        <div className='cards__container'>
        <Card 
        title='Title Here'
        imageURL='https://cdn.vox-cdn.com/thumbor/RZOfEehCS-W-vC6IyMnv_Qfy_nI=/0x0:112x112/1200x0/filters:focal(0x0:112x112)/cdn.vox-cdn.com/uploads/chorus_asset/file/10775823/forsen_cd_first.png'
        body='Body text here'
        />
        <Card 
        title='Title Here'
        imageURL='https://cdn.vox-cdn.com/thumbor/RZOfEehCS-W-vC6IyMnv_Qfy_nI=/0x0:112x112/1200x0/filters:focal(0x0:112x112)/cdn.vox-cdn.com/uploads/chorus_asset/file/10775823/forsen_cd_first.png'
        body='Body text here'
        />
        </div>
        </div>
    );
}

export default Projects;