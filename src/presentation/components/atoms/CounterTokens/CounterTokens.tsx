import './counter-tokens.scss';

interface CounterTokensProps {
    initialTokens?: number;
    actualyTokens?: number;
}

export function CounterTokens({ initialTokens, actualyTokens }: CounterTokensProps) {
    return (
        <div className="counter-tokens">
            <span className="counter-tokens__credits">Credits:</span>
            <div className="counter-tokens__values">
                <span className="counter-tokens__values__initial">{initialTokens}</span>
                <p className="counter-tokens__values__separate">/</p>
                <span className="counter-tokens__values__actualy">{actualyTokens}</span>
            </div>
        </div>
    );
}
