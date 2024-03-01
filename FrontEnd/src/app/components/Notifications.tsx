import { ErrorIcon, CheckmarkIcon, LoaderIcon } from 'react-hot-toast'
import { useToaster } from 'react-hot-toast/headless'

const Notifications = () => {
    const { toasts, handlers } = useToaster()
    const { startPause, endPause, calculateOffset, updateHeight } = handlers

    return (
        <div
            style={{
                position: 'fixed',
                top: '5rem',
                right: '2.5rem',
                zIndex: 90000,
                transition: 'all 2s ease-in-out'
            }}
            onMouseEnter={startPause}
            onMouseLeave={endPause}
        >
            {toasts.map(toast => {
                const offset = calculateOffset(toast, {
                    reverseOrder: false,
                    gutter: 2
                })

                const ref = ({el}: any) => {
                    if (el && typeof toast.height !== 'number') {
                        const height = el.getBoundingClientRect().height
                        updateHeight(toast.id, height + 10 - height)
                    }
                }

                // @ts-ignore
                return (
                    <div
                        key={toast.id}
                        ref={ref}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            gap: '1rem',
                            width: 'auto',
                            background: 'white',
                            color: 'black',
                            padding: '1.5em 1.5em',
                            boxShadow: '#0009 0px 0px 7px 1px',
                            borderRadius: '5px',
                            transition: 'all 0.5s ease-in',
                            opacity: toast.visible ? 1 : 0,
                            transform: `translateY(${offset}px)`
                        }}
                        {...toast.ariaProps}
                    >
                        {toast.type === 'loading'
                            ? (
                                <LoaderIcon />
                            )
                            : toast.type === 'success'
                                ? (
                                    <CheckmarkIcon />
                                )
                                : (
                                    <ErrorIcon />
                                )}

                        {toast.message!.toString()}
                    </div>
                )
            })}
        </div>
    )
}

export default Notifications
