import React from 'react'
import { useState } from "react"
interface SignupFormData {
    name: string;
    phone: string;
    role: string;
    email: string;
    password: string;
    repeatePassword: string;

}
const SignupForm = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        name: '',
        phone: '',
        role: '',
        email: '',
        password: '',
        repeatePassword: ''
    });
    const [error, setError] = useState('');

    const roles = ["Doctor", "Receptionalist"];
    // Handle change in Input in the elements in the form 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
    //  Excecutes when the form is submitted.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password != formData.repeatePassword) {
            setError('Password do not match');
            return;
        }
        if (!formData.role) {
            setError('Please select a role');
            return;
        }
        console.log(formData);
        setError('');
    }

    return (
        <div className='w-full max-w-sm mx-auto p-8 border-gray-300 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
                    <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    value={formData.name} 
                    onChange={handleChange} 
                    required className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-ring' />

                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                    <input
                        type='password'
                        id='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring'
                        />
                </div>
                <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='repeat-passwod'></label>
                        <input
                            type='password'
                            id='repeat-password'
                            value={formData.repeatePassword}
                            onChange={handleChange}
                            required
                            className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:ring'
                        />
                        {error && <p className='text-red-500 mb-4'>{error}</p>}
                        {
                        
                        }

                        <button className='bg-blue-500 hover:bg-blue-700'>Create your account</button>
                </div>







            </form>

        </div>
    )
}

export default SignupForm