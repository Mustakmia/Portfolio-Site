import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>

            <Title title={'My Skills'} span={'my skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'CSS3'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar
                        title={'BOOTSTRAP'}
                        width={'65%'}
                        text={'65%'}
                    />
                    <ProgressBar
                        title={'REACTJS'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'NODEJS'}
                        width={'5%'}
                        text={'95%'}
                    />
                    <ProgressBar
                        title={'MONGODB'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar
                        title={'REACT NATIVE'}
                        width={'25%'}
                        text={'25%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
