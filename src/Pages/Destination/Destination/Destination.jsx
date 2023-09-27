import React, { useState } from 'react';
import Cover from '../Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useDestination from '../../../hooks/useDestination';
import VisitDestination from '../VisitDestination/VisitDestination';
import './Destination.css'



const Destination = () => {


    const [destinations, loading] = useDestination();

    const sylhet = destinations.filter(destination => destination.category === 'sylhet');

    const rangamati = destinations.filter(destination => destination.category === 'rangamati');

    const coxbaxar = destinations.filter(destination => destination.category === 'coxbaxar');

    const bandorban = destinations.filter(destination => destination.category === 'bandorban');

    const khagrachari = destinations.filter(destination => destination.category === 'khagrachari');

    const panchagar = destinations.filter(destination => destination.category === 'panchagar');

    const barisal = destinations.filter(destination => destination.category === 'barisal');

    const [tabIndex, setTabIndex] = useState(0);

    if (loading) {
        // Render a loading indicator here, such as a spinner or a message
        return <center><span className="loading loading-ring loading-lg my-2"></span></center>;
    }

    return (
        <div>
            <Cover></Cover>
            <br /> <br /> 

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                
                <center className='mt-20 md:mx-80'>
                <TabList>
                    <Tab>Sylhet</Tab>
                    <Tab>Rangamati</Tab>
                    <Tab>Coxbaxar</Tab>
                    <Tab>Bandorban</Tab>
                    <Tab>Khagrachari</Tab>
                    <Tab>Panchagar</Tab>
                    <Tab>Barisal</Tab>
                </TabList>
                </center>


                <TabPanel>
                    <h1 className='text-center my-10  text-4xl'>Sylhet</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            sylhet.map(place => <VisitDestination key={place._id} place={place} ></VisitDestination>)
                        }
                    </div>

              

                </TabPanel>

                <TabPanel>
                    <h1 className='text-center my-10 text-4xl'>Sylhet</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            rangamati.map(place => <VisitDestination key={place._id} place={place} ></VisitDestination>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h1 className='text-center my-10 text-4xl'>Sylhet</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            coxbaxar.map(place => <VisitDestination key={place._id} place={place} ></VisitDestination>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h1 className='text-center my-10 text-4xl'>Sylhet</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            bandorban.map(place => <VisitDestination key={place._id} place={place} ></VisitDestination>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h1 className='text-center my-10 text-4xl'>Sylhet</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            khagrachari.map(place => <VisitDestination key={place._id} place={place} ></VisitDestination>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h1 className='text-center my-10 text-4xl'>Sylhet</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            panchagar.map(place => <VisitDestination key={place._id} place={place} ></VisitDestination>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h1 className='text-center my-10 text-4xl'>Sylhet</h1>
                    <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-4'>
                        {
                            barisal.map(place => <VisitDestination key={place._id} place={place} ></VisitDestination>)
                        }
                    </div>
                </TabPanel>

            </Tabs> <br /> <br />
        </div>
    );
};

export default Destination;