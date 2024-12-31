import { Radio, RadioGroup } from '@headlessui/react'
import { IoCheckboxOutline } from 'react-icons/io5'
import { IoCloseCircleOutline } from 'react-icons/io5'

const LayoutRadioGroup = ({ setIsLayoutActive, layout, layoutSelected, setLayoutSelected }) => {
    const handleChange = () => {
        setIsLayoutActive(false)
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
            <h2 className='absolute top-4 left-16'>Choose a Layout</h2>
            <div className="mx-auto relative w-full max-w-md">

                <RadioGroup by="name" value={layoutSelected} onChange={setLayoutSelected} aria-label="Layout" className="space-y-2">
                    {layout.map((layout) => (
                        <Radio
                            key={layout.name}
                            value={layout}
                            className="group relative flex cursor-pointer rounded-lg bg-white py-4 px-5 text-white shadow-md transition focus-visible:ring-4 focus-visible:ring-black data-[focus]:outline-3 data-[focus]:outline-black data-[checked]:bg-blue-200 "
                        >
                            <div className="flex w-full items-center justify-between">
                                <div className="text-sm/6">
                                    <p className="font-semibold text-black">{layout.name}</p>
                                    <div className="flex font-bold gap-2 text-[#6e6e73]">
                                        <div>{layout.description}</div>
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


export default LayoutRadioGroup

