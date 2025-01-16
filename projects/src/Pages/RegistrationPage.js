import React, {useState} from 'react';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password1: '',
        password2: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password1, password2 } = formData;

        if (password1 !== password2) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://167.99.138.67:1111/createaccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: username,
                    passwordOne: password1,
                    passwordTwo: password2,
                }),
            });

            const data = await response.json();
            console.log(data)
            if (response.ok) {
                setSuccessMessage('Registration successful!');
                setError('');
                setFormData({ username: '', password1: '', password2: '' }); // Reset form
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password1">Password:</label>
                    <input
                        type="password"
                        id="password1"
                        name="password1"
                        value={formData.password1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password2">Confirm Password:</label>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;