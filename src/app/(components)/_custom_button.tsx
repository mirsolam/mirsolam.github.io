export default function CustomButton({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) {
    return (
        <div className="custom-button border-2 border-(--secondary-foreground) rounded-md text-center" onClick={onClick}>
            <button type="button" className="child-form-button text-(--secondary-foreground)">Send</button>
        </div>
    );
}