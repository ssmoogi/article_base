from flask import Flask, escape, request, render_template, url_for

app = Flask(__name__)

posts = [
    {
        'author': 'Marie Lu',
        'title': 'Warcross',
        'genre': 'YA Novel',
        'content': 'i love this very much',
    },
    {
        'author': 'Leigh Bardugo',
        'title': 'Six of Crows',
        'genre': 'YA Novel',
        'content': 'i also love this very much',
    }
]

@app.route('/')
@app.route('/home')
def hello():
    return render_template('home.html', posts=posts, title='Home')

@app.route('/about')
def about():
    return render_template('about.html', title='About')

if __name__ == '__main__':
    app.run(debug=True)