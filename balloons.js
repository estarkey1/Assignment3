document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });
    
    // Uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // Hover effect for changing h1 color
    document.querySelectorAll('.form-check-label').forEach(label => {
        label.addEventListener('mouseover', function (e) {
            if (e.target.htmlFor === 'red') {
                document.querySelector('h1.greeting').style.color = 'red';
            } else if (e.target.htmlFor === 'green') {
                document.querySelector('h1.greeting').style.color = 'green';
            } else if (e.target.htmlFor === 'blue') {
                document.querySelector('h1.greeting').style.color = 'blue';
            }
        });
        label.addEventListener('mouseout', function () {
            document.querySelector('h1.greeting').style.color = 'slategray';
        });
    });

    // Apply random animate.css attention seeker on load
    const attentionSeekers = [
        'animate__bounce', 'animate__flash', 'animate__pulse', 
        'animate__rubberBand', 'animate__shakeX', 'animate__shakeY', 
        'animate__swing', 'animate__tada', 'animate__wobble'
    ];
    const randomAnimation = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
    document.querySelector('h1.greeting').classList.add('animate__animated', randomAnimation);

    // Checkbox balloon visibility control
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            elem.style.visibility = "visible";
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    // Check / Uncheck All Balloons
    document.getElementById('checkAll').addEventListener('change', function (e) {
        const isChecked = e.target.checked;
        document.querySelectorAll('#checkbox-card .form-check-input').forEach(input => {
            input.checked = isChecked;
            const imgElem = document.getElementById(input.id + 'Img');
            imgElem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            imgElem.style.visibility = "visible";
            isChecked ?
                imgElem.classList.add("animate__animated", "animate__bounceInDown") :
                imgElem.classList.add("animate__animated", "animate__bounceOutUp");
        });
    });

    // Show toast when no balloons are selected on submit
    document.getElementById('submit').addEventListener('click', function () {
        const checkedBalloons = Array.from(document.querySelectorAll('#checkbox-card .form-check-input')).some(input => input.checked);
        if (!checkedBalloons) {
            const toastElement = new bootstrap.Toast(document.getElementById('noSelectionToast'));
            toastElement.show();
        }
    });
});
