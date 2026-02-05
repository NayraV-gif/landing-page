from flask import Flask, render_template, request

app = Flask(__name__, 
            template_folder="templates", static_folder="static"
            )

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contacto", methods=["POST"])
def contacto():
    nombre = request.form["nombre"]
    email = request.form["email"]
    mensaje = request.form["mensaje"]

    # Más adelante: guardar en DB o enviar email
    print(nombre, email, mensaje)

    return render_template("index.html", enviado=True)

@app.route("/proyectos")
def proyectos():
    return render_template("proyectos.html")

if __name__ == "__main__":
    app.run(debug=True)
