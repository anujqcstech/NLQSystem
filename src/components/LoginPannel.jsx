import { MdOutlineSecurity } from "react-icons/md";
import { Link } from "react-router-dom";

function LoginPanel() {
    return (
        <div className="card shadow">
            <div className="card-body">
                <div className="login-panel">
                    <center>
                        <h5 className="mb-2">Secure Login</h5>
                        <p className="text-secondary mb-4">
                            Authenticate with Internet Identity to access the NLQ system
                        </p>
                    </center>

                    <div className="login-benefits">
                        <strong>What you’ll get:</strong>
                        <ul>
                            <li>Natural language queries to SQL conversion</li>
                            <li>Real-time query execution and results</li>
                            <li>Query history and saved queries</li>
                            <li>Admin console (for administrators)</li>
                        </ul>
                    </div>

                    <Link to={'/login'} className="btn btn-primary w-100 mt-3">
                        <MdOutlineSecurity className="text-light" /> Login with Internet Identity
                    </Link>

                    <p className="text-secondary text-center mt-3">
                        Secure, decentralized authentication powered by the Internet Computer
                    </p>
                </div>
            </div>
        </div>

    );
}

export default LoginPanel;
