import React from 'react';

function ExampleApplication() {
    return (
        <div>
            <Header />
            <React.StrictMode>
                <div>
                    <ComponentOne />
                    <ComponentTwo />
                </div>
            </React.StrictMode>
            <Footer />
        </div>
    );
}

/*
StrictMode currently helps with:

1. Identifying components with unsafe lifecycles
2. Warning about legacy string ref API usage
3. Warning about deprecated findDOMNode usage
4. Detecting unexpected side effects
5. Detecting legacy context API
*/