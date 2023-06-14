function process_argv() {
    const { argv } = process;
    const result = studentPortal(argv[2]);

    return result;
}

function studentPortal(studentId) {
    const studentList = [
        {
            id: "2010310164",
            name: "Rakanda Pangeran Nasution",
            gpa: 2.65,
            status: false,
        },
        {
            id: "2011310021",
            name: "Yosef Noferianus Gea",
            gpa: 3.1,
            status: true,
        },
        {
            id: "2014310100",
            name: "Angelia",
            gpa: 1.25,
            status: true,
        },
        {
            id: "2011320090",
            name: "Dito Bagus Prasetio",
            gpa: 2.75,
            status: true,
        },
        {
            id: "2011320100",
            name: "Hikman Nurahman",
            gpa: 2.45,
            status: true,
        },
        {
            id: "2010320181",
            name: "Edizon",
            gpa: 1.95,
            status: true,
        },
        {
            id: "2012320055",
            name: "Marrisa Stella",
            gpa: 3.5,
            status: false,
        },
        {
            id: "2012330080",
            name: "Dea Christy Keliat",
            gpa: 3,
            status: true,
        },
        {
            id: "2013330049",
            name: "Sekarini Mahyaswari",
            gpa: 3.5,
            status: true,
        },
        {
            id: "2012330004",
            name: "Yerica",
            gpa: 3.15,
            status: false,
        },
    ];
    const student = studentList.find((s) => s.id === studentId);
    if (!student) {
        return "Mahasiswa tidak terdaftar";
    }
    if (!student.status) {
        return `Mahasiswa dengan id ${studentId} sudah tidak aktif`;
    }

    const credits = getCredits(student.gpa);
    const subjects = getSubjects(credits);

    return {
        id: student.id,
        name: student.name,
        gpa: student.gpa,
        credits: credits,
        subjects: subjects,
    };
}

function getCredits(gpa) {
    let credits;

    if (gpa >= 2.99) {
        credits = 24;
    } else if (gpa >= 2.5) {
        credits = 21;
    } else if (gpa >= 2.0) {
        credits = 18;
    } else if (gpa >= 1.5) {
        credits = 15;
    } else {
        credits = 12;
    }

    return credits;
}

function getSubjects(credits) {
    const subjectsList = [
        {
            subjectName: "Ilmu Politik",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Ilmu Ekonomi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Estetika",
            credit: 1,
            status: "pilihan",
        },
        {
            subjectName: "Kepemimpinan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Etika",
            credit: 2,
            status: "pilihan",
        },
        {
            subjectName: "Sosiologi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Teori Pengambil keputusan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Statistika",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Aplikasi IT",
            credit: 3,
            status: "pilihan",
        },
    ];

    //let subjectResult = [];

    const wajib = subjectsList.filter(subject => subject.status === "wajib");
    const pilihan = subjectsList.filter(subject => subject.status === "pilihan");

    pilihan.sort((subjectA, subjectB) => subjectB.credit - subjectA.credit);

    let sortedSubject = [...wajib, ...pilihan];

    let selectedSubjects = [];
    let remainingCredits = credits;
    for (let i = 0; i < sortedSubject.length; i++) {
        if (remainingCredits >= sortedSubject[i].credit) {
            selectedSubjects.push(sortedSubject[i]);
            remainingCredits -= sortedSubject[i].credit;
        }
    }

    return selectedSubjects;
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentPortal,
    getSubjects,
    getCredits,
};