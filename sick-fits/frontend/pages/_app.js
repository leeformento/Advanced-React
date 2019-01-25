import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
    render() {
        const { Component } = this.props // component will be sell or index

        return(
            <Container>
                <Page>
                <Component />
                </Page>
            </Container>
        )
    }

}

export default MyApp;