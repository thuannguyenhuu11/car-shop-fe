import { WrapperProps } from '@/type/Types';

const Wrapper = ({ children, className }: WrapperProps) => {
    return (
        <section className={className}>
            <>{children}</>
        </section>
    );
};

export default Wrapper;
