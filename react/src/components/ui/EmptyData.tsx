import Card from '@components/ui/Card'
import Image from '@components/ui/Image'
import { cn } from '@lib/utils/helper'


interface TProps {
    customeClass?: {
        container?: string;
        img?: string;
        label?: string;
    }
}

const EmptyData = (props: TProps) => {
    const { customeClass } = props
    return (
        <Card
            body={{
                content: <div
                    className={cn({
                        "flex flex-col items-center justify-center": true,
                        [customeClass?.container || ""]: customeClass?.container
                    })}
                >
                    <Image
                        className={cn({
                            [customeClass?.img || ""]: customeClass?.img
                        })}
                        src="empty-data.svg"
                    />
                    <p
                        className={cn({
                            "font-medium text-base-medium": true,
                            [customeClass?.label || ""]: customeClass?.label
                        })}
                    >
                        No data to show
                    </p>
                </div>
            }}

            variant='centered-body'
            fit={false}
        />
    )
}

export default EmptyData