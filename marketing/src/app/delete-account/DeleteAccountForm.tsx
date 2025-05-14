import { useState, Fragment } from "react"
import { Button } from "@/app/delete-account/Button"
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { Listbox, Transition } from "@headlessui/react"

const deletionReasons = [
    { id: "", label: "Select a reason" },
    { id: "not-useful", label: "Not finding it useful" },
    { id: "too-expensive", label: "Too expensive" },
    { id: "found-alternative", label: "Found a better alternative" },
    { id: "privacy-concerns", label: "Privacy concerns" },
    { id: "too-complex", label: "Too complex to use" },
    { id: "not-enough-features", label: "Missing features I need" },
    { id: "other", label: "Other reason" },
]

export function DeleteAccountForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedReason, setSelectedReason] = useState(deletionReasons[0])

    const handleReasonChange = (reason: typeof deletionReasons[0]) => {
        setSelectedReason(reason)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsLoading(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm"
            >
                <div className="flex flex-col items-center text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/20">
                        <CheckCircleIcon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                        Deletion Request Received
                    </h3>
                    <div className="mt-4 text-sm text-gray-600 space-y-4">
                        <p>Your account and personal data will be scheduled for deletion within 30 days.</p>
                        <div className="rounded-xl bg-blue-50 p-4 ring-1 ring-inset ring-blue-200">
                            <p className="text-blue-700">
                                Note: If you log back into your account during this time, your deletion request will be canceled.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.form 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-8"
        >
            <div className="group relative rounded-2xl border border-red-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:shadow-red-100">
                <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-red-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="space-y-6">
                    {/* Reason Dropdown */}
                    <div className="w-full">
                        <Listbox value={selectedReason} onChange={handleReasonChange}>
                            <div className="relative mt-1">
                                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Why are you deleting your account?
                                </Listbox.Label>
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-4 pr-10 text-left border-0 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 hover:ring-gray-400">
                                    <span className={`block truncate ${selectedReason.id === "" ? "text-gray-500" : "text-gray-900"}`}>
                                        {selectedReason.label}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <ChevronDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {deletionReasons.slice(1).map((reason) => (
                                            <Listbox.Option
                                                key={reason.id}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-3 pl-4 pr-9 ${
                                                        active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                                                    }`
                                                }
                                                value={reason}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                            {reason.label}
                                                        </span>
                                                        {selected && (
                                                            <span
                                                                className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
                                                                    active ? "text-gray-600" : "text-gray-500"
                                                                }`}
                                                            >
                                                                <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>

                    {/* Feedback */}
                    <div>
                        <label htmlFor="feedback" className="block text-sm font-medium leading-6 text-gray-900">
                            How can we improve? (optional)
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="feedback"
                                name="feedback"
                                rows={4}
                                className="block w-full rounded-lg border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
                                placeholder="Help us improve our service..."
                            />
                        </div>
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id="confirm"
                                name="confirm"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="confirm" className="font-medium text-gray-900">
                                I understand this action cannot be undone after 30 days
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Button
                        type="submit"
                        variant="solid"
                        color="red"
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-sm hover:shadow-md hover:shadow-red-500/20 transition-all"
                        disabled={isLoading}
                    >
                        {isLoading ? "Processing..." : "Request Account Deletion"}
                    </Button>
                </div>
            </div>
        </motion.form>
    )
}
