import Document, {Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document{ // Só pode classe pela documentação do next 
    render() {
        return(
            <html>
                <head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" /> 

                </head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </html>
        );       
        
    }

}