import React from 'react';

function Skills() {
    return (
        <section className="skills" id='skills'>
            <h2>Skills</h2>
            <div style={{display:'flex'}}>
                <div className='art-skl1'>
                    <div style={{display:'flex'}}>
                    <ul>
                        <h3>Web developer</h3>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                    <ul>
                        <h3>Flameworks</h3>
                        <li>Laravel</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                    </ul>
                    </div>
                    <div style={{display:'flex'}}>
                    <ul>
                        <h3>Programm Language</h3>
                        <li>Java (Version 11+)</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>C#</li>
                    </ul>
                    <ul>
                        <h3>Database</h3>
                        <li>MySQL</li>
                        <li>Oracle SQL</li>
                        <li>SQL Server</li>
                    </ul>
                    <ul>
                        <h3>Tools</h3>
                        <li>Git and GitHub</li>
                        <li>Docker</li>
                    </ul>
                    </div>
                </div> 
                <div className='art-skl2'>
                    <ul>
                        <h3>infrastructure</h3>
                        <li>Intune</li>
                        <li>Microsoft Entra ID</li>
                        <li>Domain controler and Active Directory</li>
                        <li>Microsoft EDR</li>
                        <li>Clouds: Azure, Oracle and AWS</li>
                    </ul>
                    <ul>
                        <h3>Tools</h3>
                        <li>Jira</li>
                        <li>Quest Kace</li>
                        <li>TeamViewer</li>
                        <li>McAfee</li>
                        <li>Intune</li>
                    </ul>
                </div> 
            </div>

        </section>
    );
}

export default Skills;
