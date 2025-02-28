import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';
import { Card } from './Card';
import './CustomHook.css';

export const CustomHook = () => {

    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://picsum.photos/id/${counter}/200/300`);

    return (
        <div className="custom-hook-container">
            <h1>Random Image API</h1>
            <div className="buttons-container">
                <button className="btn btn-primary" onClick={() => decrement()}>
                    Anterior
                </button>
                <button className="btn btn-primary" onClick={() => increment()}>
                    Siguiente
                </button>
            </div>
            {isLoading ? (
                <Loading />
            ) : (
                <Card
                    id={counter}
                    name={`Image ${counter}`}
                    sprites={[data]}
                />
            )}
        </div>
    );
};
