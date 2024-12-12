import { Radio, RadioGroup } from '@headlessui/react'
import { IoCheckboxOutline } from 'react-icons/io5'
import { IoCloseCircleOutline } from 'react-icons/io5'

const SchemeRadioGroup = ({ setIsRadioActive, schemes, selected, setSelected, handleSchemeChange }) => {
    const handleChange = () => {
        handleSchemeChange()
        setIsRadioActive(false)
    }

    return (
        <div className="p-4 my-40 absolute z-10 bg-white rounded-2xl">
            <IoCloseCircleOutline
                className="size-8 mb-4 cursor-pointer transition duration-150 ease-in hover:rotate-180 outline-none focus-visible:ring-4 focus-visible:ring-black"
                aria-label="Close the radio group"
                onClick={() => handleChange()}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleChange();
                    }
                }}
                role="button"
                tabIndex={0}
            />
            <h2 className='absolute top-4 left-14'>Choose a Palette Scheme</h2>
            <div className="mx-auto relative w-full max-w-md">

                <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Palette scheme" className="space-y-2">
                    {schemes.map((scheme) => (
                        <Radio
                            tabIndex={0}
                            key={scheme.name}
                            value={scheme}
                            className="group relative flex cursor-pointer rounded-lg bg-white py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-3 data-[focus]:outline-black data-[checked]:bg-blue-200 "
                        >
                            <div className="flex w-full items-center justify-between">
                                <div className="text-sm/6">
                                    <p className="font-semibold text-black">{scheme.name}</p>
                                    <div className="flex gap-2 text-black/70">
                                        <div>{scheme.description}</div>
                                        {/* <div aria-hidden="true">&middot;</div>
                                        <div>{plan.cpus}</div>
                                        <div aria-hidden="true">&middot;</div>
                                        <div>{plan.disk}</div> */}
                                    </div>
                                </div>
                                <IoCheckboxOutline
                                    className="size-6 text-black ml-6 opacity-0 transition group-data-[checked]:opacity-100"
                                />
                            </div>
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
        </div>
    )
}


export default SchemeRadioGroup