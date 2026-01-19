import React from 'react'
import LoginPanel from '../components/LoginPannel'
import FeatureCard from '../components/FeatureCard'
import { FiDatabase } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";





const Landing = () => {
    return (
        <div>
            <div className="container-fluid landing-wrapper">
                <div className="container">
                    <div className="row align-items-center min-vh-100">

                        {/* LEFT SECTION */}
                        <div className="col-lg-6">
                            <h2 className="mb-2">
                                <FiDatabase />NLQ System</h2>
                            <h6 className="text-muted mb-4">
                                Enterprise-grade Natural Language Query system with advanced
                                security and compliance
                            </h6>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <FeatureCard
                                        icon={<MdOutlineSecurity />}
                                        title="Enterprise Security"
                                        description="Multi-tenant RBAC, SSO integration, and comprehensive audit logging"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <FeatureCard
                                        icon={<MdLockOutline />}
                                        title="SQL Safety Engine"
                                        description="Read-only enforcement, cost-based scoring, and join explosion detection"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <FeatureCard
                                        icon={<FiDatabase />}
                                        title="EBS Integration"
                                        description="Native support for GL, AP, and SLA modules with schema awareness"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <FeatureCard
                                        icon={<FaArrowTrendUp />}
                                        title="RAG Pipeline"
                                        description="Retrieval-augmented generation with domain-specific fine-tuning"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SECTION */}
                        <div className="col-lg-6">
                            <LoginPanel />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
