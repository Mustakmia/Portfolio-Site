import React from 'react'
import styled from 'styled-components';
import resume from '../img/me.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Mustak Mia</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, natus quas vero enim
                    praesentium delectus est id fugiat ab libero adipisci recusandae at maxime veritatis!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, nesciunt.

                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Mustak Mia</p>
                        <p>: 31</p>
                        <p>: Bangladeshi </p>
                        <p>: Bengali, English </p>
                        <p>: Dhaka, Bangladesh</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1FFnEAoo9Pua1Ry_sX5TKui1JG91nsiiV/view?usp=sharing"><PrimaryButton title={'Download Resume'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
