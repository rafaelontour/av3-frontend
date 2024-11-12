"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => setIsLogin(!isLogin);

    return (
        <main className="h-screen flex justify-center items-center bg-slate-200 px-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">

                <div className="hidden md:flex w-1/2 h-full rounded-l-lg overflow-hidden">
                    <Image
                        src={isLogin ? "/login.jpg" : "/criarconta.jpg"}
                        alt={isLogin ? "Login illustration" : "Signup illustration"}
                        width={500}
                        height={600}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Formulário de Login / Criar Conta */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8 transition-opacity duration-500 ease-in-out">

                    {isLogin ? (
                        <>
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={250}
                                height={150}
                                className="mb-4"
                            />
                            <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                                Faça o Login
                            </h2>
                            <p className="text-sm text-slate-500 mb-6">
                                Se você já é membro, pode fazer login com seu endereço de e-mail e senha.                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                                Criar Conta
                            </h2>
                            <p className="text-sm text-slate-500 mb-6">
                                Torne-se membro e agende seu horário no auditório.                            </p>
                        </>
                    )}

                    {/* Campos de entrada para Login e Cadastro */}
                    {isLogin ? (
                        <>
                            <div className="w-full mb-4">
                                <label className="block text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Digite seu email"
                                    className="input input-primary w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label className="block text-slate-700 mb-1">Senha</label>
                                <input
                                    type="password"
                                    placeholder="Digite sua senha"
                                    className="input input-primary w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </>
                    ) : (
                        /* Campos para Criar Conta */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div>
                                <label className="block text-slate-700 mb-1">Nome</label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    className="input input-primary w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-700 mb-1">CPF</label>
                                <input
                                    type="text"
                                    placeholder="000.000.000-00"
                                    className="input input-primary w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Digite seu email"
                                    className="input input-primary w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-700 mb-1">Senha</label>
                                <input
                                    type="password"
                                    placeholder="Digite sua senha"
                                    className="input input-primary w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-slate-700 mb-1">Matrícula</label>
                                <input
                                    type="text"
                                    placeholder="000.000.000"
                                    className="input input-primary w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    )}

                    <button
                        style={{ backgroundColor: '#370013' }}
                        className="w-full py-2 mt-6 text-white rounded-md hover:opacity-90 transition-opacity">
                        {isLogin ? 'Entrar' : 'Criar Conta'}
                    </button>

                    <p className="text-sm text-slate-600 mt-4">
                        {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                        <button onClick={toggleAuthMode} className="text-blue-600 hover:underline ml-1">
                            {isLogin ? 'Criar Conta' : 'Entrar'}
                        </button>
                    </p>
                </div>
            </div>
        </main>
    );
}
