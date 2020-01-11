/** Convention: Wrap the Display Name for Easy Debugging */

function withSubscription(WrappedComponent) {
    class WithSubscription /* extends React.Component */ {
    }

    WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
    return WithSubscription;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component';
}