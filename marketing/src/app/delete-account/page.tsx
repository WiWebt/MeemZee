"use client"
import { DeleteAccountForm } from "@/app/delete-account/DeleteAccountForm"
import { Container } from "@/app/delete-account/Container"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

export default function DeleteAccount() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <Container className="pt-24 pb-16 sm:py-20">
                <div className="mx-auto max-w-2xl">
                    {/* Header Section */}
                    <div className="relative">
                        <div className="absolute inset-0 -z-10">
                            <div className="h-1/2 w-full bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/20">
                                <ExclamationTriangleIcon className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Delete Your Account
                            </h1>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                We&apos;re sorry to see you go. Before you proceed, please note that this action cannot be undone after the grace period.
                            </p>
                            <div className="mt-6 inline-flex items-center gap-x-2 rounded-full bg-red-50 px-4 py-2.5 text-sm ring-1 ring-inset ring-red-200">
                                <span className="text-gray-600">Deleting account:</span>
                                <span className="font-semibold text-red-700">user@example.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <div className="group relative rounded-2xl border border-red-100 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:shadow-red-100">
                            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-red-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <h3 className="flex items-center gap-x-3 text-base font-semibold text-red-600">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-100">
                                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                                </span>
                                What will be deleted
                            </h3>
                            <ul className="mt-5 space-y-4 text-sm text-gray-600">
                                <li className="flex items-center gap-x-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                                    Your account information
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                                    Your progress and achievements
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                                    Your personal settings
                                </li>
                            </ul>
                        </div>
                        <div className="group relative rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:shadow-blue-100">
                            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <h3 className="flex items-center gap-x-3 text-base font-semibold text-blue-600">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                </span>
                                What happens next
                            </h3>
                            <ul className="mt-5 space-y-4 text-sm text-gray-600">
                                <li className="flex items-center gap-x-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                    30-day grace period begins
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                    You can cancel deletion by logging in
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                    After 30 days, data is permanently deleted
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="mt-12">
                        <DeleteAccountForm />
                    </div>
                </div>
            </Container>
        </div>
    )
}
