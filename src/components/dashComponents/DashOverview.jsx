import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import BarChart from '../charts/BarChart'
import PopulationPyramid from '../charts/PiramidChart'
import DonutChart from '../charts/DonutChart'
import Loader from '../loader/Loader'

const DashOverview = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <section className='dashboard_overview p-3'>
            <h5>Dashboard OverView</h5>
            <div className="row">
                <div className="col-lg-4">
                    <Card title={"510"} description={"Lorem ipsum dolor sit elit."} />
                </div>
                <div className="col-lg-4">
                    <Card subTitle={"Sub Title"} title={"510"} description={"Lorem ipsum dolor sit elit."} />

                </div>
                <div className="col-lg-4">
                    <Card subTitle={"Sub Title"} title={"51%"} />

                </div>
            </div>

            <div className="mt-5">
                <BarChart />
            </div>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <PopulationPyramid />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <DonutChart />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DashOverview


