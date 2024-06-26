'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import Button from './Buttons';

const Filter = ({ valueKey, name, data }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id,
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl(
            {
                url: window.location.href,
                query,
            },
            { skipNull: true },
        );

        router.push(url);
    };

    return (
        <div className='mb-8'>
            <h3 className='text-lg font-semibold'>{name}</h3>
            <div className='flex flex-wrap gap-2 mt-2'>
                {data.map((filter) => (
                    <div key={filter.id} className='flex items-center'>
                        <button
                            className={`p-5 py-2 rounded-lg ${selectedValue === filter.id ? 'bg-red-500 text-white' : 'hover:bg-gray-100 bg-white border border-gray-300'}`}
                            onClick={() => onClick(filter.id)}
                            >
                            {filter.name}
                        </button>
                    </div>
                ))}
            </div>
                <hr className='my-10 border-gray-300 h-px' />
        </div>
    );
};

export default Filter;
