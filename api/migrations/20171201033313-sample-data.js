'use strict';
module.exports = {

    up(db, next) {

        // Create index of collection.
        db.collection('hospital').createIndex({name: "text"}, next);
        db.collection('disease').createIndex({name: "text"}, next);
        db.collection('doctor').createIndex({name: "text"}, next);
        db.collection('medicine').createIndex({name: "text"}, next);
        db.collection('specialist').createIndex({name: "text"}, next);
        db.collection('symptoms').createIndex({name: "text"}, next);
        // End create index of collection.

        db.collection('hospital').insertMany([
            {
                _id: 1,
                name: "Rumah Sakit Tiara Bekasi",
                address: {
                    streetName: 'Jl. Raya Babelan No.63, Kebalen, Babelan, Bekasi, Jawa Barat 17160',
                    latitude: -6.186352,
                    longitude: 107.038793
                },
                url_image: [
                    'http://lorempixel.com/400/200/',
                    'http://lorempixel.com/g/400/200/'
                ]
            },
            {
                _id: 2,
                name: "Rumah Sakit Mekar Sari",
                address: {
                    streetName: 'Jalan Mekar Sari No.1, Duren Jaya, Bekasi Timur, Bekasi Jaya, Bekasi Tim., Kota Bks, Jawa Barat 17111',
                    latitude: -6.225242,
                    longitude: 107.011022
                },
                url_image: [
                    'http://lorempixel.com/400/200/',
                    'http://lorempixel.com/g/400/200/'
                ]
            },
            {
                _id: 3,
                name: "RS Seto Hasbadi",
                address: {
                    streetName: 'Jalan Raya Seroja No.19, Harapan Jaya, Bekasi Utara, Harapan Jaya, Bekasi Utara, Kota Bks, Jawa Barat 17124',
                    latitude: -6.190476,
                    longitude: 106.990578
                },
                url_image: [
                    'http://lorempixel.com/400/200/',
                    'http://lorempixel.com/g/400/200/'
                ]
            },
        ], next);

        db.collection('medicine').insertMany([
            {
                _id: 1,
                name: "Paracetamol",
                type: "Pulvis",
                description: ""
            },
            {
                _id: 2,
                name: "Paracetamol",
                type: "Pulveres",
                description: ""
            },
            {
                _id: 3,
                name: "Paracetamol",
                type: "Compressi",
                description: ""
            },
            {
                _id: 4,
                name: "Paracetamol",
                type: "Pil",
                description: ""
            },
            {
                _id: 5,
                name: "Paracetamol",
                type: "Capsule",
                description: ""
            },
            {
                _id: 6,
                name: "Paracetamol",
                type: "Kaplet",
                description: ""
            },
            {
                _id: 7,
                name: "Paracetamol",
                type: "Solutiones",
                description: ""
            },
            {
                _id: 8,
                name: "Paracetamol",
                type: "Suspensiones",
                description: ""
            },
            {
                _id: 9,
                name: "Paracetamol",
                type: "Elmusiones",
                description: ""
            },
            {
                _id: 10,
                name: "Paracetamol",
                type: "Galenik",
                description: ""
            },
            {
                _id: 11,
                name: "Paracetamol",
                type: "Extractum",
                description: ""
            },
            {
                _id: 12,
                name: "Paracetamol",
                type: "Infusa",
                description: ""
            },
            {
                _id: 13,
                name: "Paracetamol",
                type: "Imunoserum",
                description: ""
            },
            {
                _id: 14,
                name: "Paracetamol",
                type: "Unguenta",
                description: ""
            },
            {
                _id: 15,
                name: "Paracetamol",
                type: "Guttae",
                description: ""
            },
            {
                _id: 16,
                name: "Paracetamol",
                type: "injectiones",
                description: ""
            }
        ], next);
        db.collection('symptoms').insertMany([
            {
                _id: 1,
                name: "Headache",
            },
            {
                _id: 2,
                name: "Headache",
            },
            {
                _id: 3,
                name: "Headache",
            },
            {
                _id: 4,
                name: "Headache",
            },
            {
                _id: 5,
                name: "Headache",
            }
        ], next);

        db.collection('disease').insertMany([
            {
                name: "Influenza",
                media_of_transmission: "Flu can be transmitted through the respiratory system also through saliva",
                prevention: "maintain endurance so as not easily attacked by virus. For example by eating regularly, adequate rest, drinking water as needed, exercising, and have a healthy lifestyle",
                medicine: [1, 2, 3],
                symptoms: [1, 2]
            },
            {
                name: "Tuberkulosis",
                media_of_transmission: "TB is a disease that attacks the breathing. Then the transmission was through breathing. Adjacent to the TB patient can enable us to get infected. In addition, when people with TB also cough, it could be a means of transmission of tuberculosis.",
                prevention: "Pemberian Vaksin BCG (diberikan pada saat balita)",
                medicine: [4, 5, 6],
                symptoms: [3, 4]
            },
            {
                name: "Muntaber",
                media_of_transmission: "Through the liquid from the mouth (vomiting) that is not cleaned properly",
                prevention: "Menjaga asupan makanan yang dikonsumsi secara cukup dan seimbang",
                medicine: [7, 8, 9],
                symptoms: [5, 1]
            },
            {
                name: "Chicken pox",
                media_of_transmission: "Chickenpox can be transmitted through direct contact with the patient. It's like shaking hands, or in direct contact with a broken bubble.",
                prevention: "Conduct chickenpox vaccination",
                medicine: [10, 11, 12],
                symptoms: [1, 2]
            },
            {
                name: "Typhus",
                media_of_transmission: "Through food contaminated with salmonella bacteria. This can happen because of unhealthy food sources or poor cleaning before the ingredients are eaten. Even in some cases, there is caused attached to the fly on food that previously landed in the stool or dirt belonging to typhus. Finally, the fly becomes the medium of transmission of typhoid",
                prevention: "Ensure food hygiene before cooking",
                medicine: [7, 8, 9],
                symptoms: [3, 4]
            }
        ], next);
        db.collection('doctor').insertMany([
            {
                name: "Faris Rayhan",
                address: {
                    streetName: 'Jl. Raya Babelan No.63, Kebalen, Babelan, Bekasi, Jawa Barat 17160',
                    latitude: -6.186352,
                    longitude: 107.038793
                },
                specialist: [1, 2],
                hospital: [1],
                url_image: [
                    'http://lorempixel.com/400/200/',
                    'http://lorempixel.com/g/400/200/'
                ]
            },
            {
                name: "Miftahul Khoir",
                address: {
                    streetName: 'Jl. Raya Babelan No.63, Kebalen, Babelan, Bekasi, Jawa Barat 17160',
                    latitude: -6.186352,
                    longitude: 107.038793
                },
                specialist: [3, 4],
                hospital: [2],
                url_image: [
                    'http://lorempixel.com/400/200/',
                    'http://lorempixel.com/g/400/200/'
                ]
            },
            {
                name: "Dimas Prapanca",
                address: {
                    streetName: 'Jl. Raya Babelan No.63, Kebalen, Babelan, Bekasi, Jawa Barat 17160',
                    latitude: -6.186352,
                    longitude: 107.038793
                },
                specialist: [5, 6],
                hospital: [3],
                url_image: [
                    'http://lorempixel.com/400/200/',
                    'http://lorempixel.com/g/400/200/'
                ]
            },
            {
                name: "Arthur Yonathan",
                address: {
                    streetName: 'Jl. Raya Babelan No.63, Kebalen, Babelan, Bekasi, Jawa Barat 17160',
                    latitude: -6.186352,
                    longitude: 107.038793
                },
                specialist: [7, 8],
                hospital: [1],
                url_image: [
                    'http://lorempixel.com/400/200/',
                    'http://lorempixel.com/g/400/200/'
                ]
            },
            {
                name: "Tegar Budi Cahya",
                address: {
                    streetName: 'Jl. Raya Babelan No.63, Kebalen, Babelan, Bekasi, Jawa Barat 17160',
                    latitude: -6.186352,
                    longitude: 107.038793
                },
                specialist: [9, 10],
                hospital: [2],
                url_image: [
                    'http://lorempixel.com/400/200/',
                    'http://lorempixel.com/g/400/200/'
                ]
            },
        ], next);

        db.collection('news').insertOne({
            name: "Today is rain"
        }, next);
        db.collection('specialist').insertMany([
            {
                _id: 1,
                name: "Child Specialist"
            },
            {
                _id: 2,
                name: "Anesthesiology and Intensive Therapy Specialist"
            },
            {
                _id: 3,
                name: "Andrology Specialist"
            },
            {
                _id: 4,
                name: "Andrology Specialist"
            },
            {
                _id: 5,
                name: "Andrology Specialist"
            },
            {
                _id: 6,
                name: "Clinical Acupuncture Specialist"
            },
            {
                _id: 7,
                name: "Specialist Surgery"
            },
            {
                _id: 8,
                name: "Child Surgery Specialist"
            },
            {
                _id: 9,
                name: "Child Surgery Specialist"
            },
            {
                _id: 10,
                name: "Oral and Maxillofacial Surgery Specialist"
            },
            {
                _id: 11,
                name: "Plastic Reconstruction and Aesthetic Specialist"
            },
            {
                _id: 12,
                name: "Neurosurgeon"
            },
            {
                _id: 13,
                name: "Thoracic and Cardiovascular Surgery Specialist"
            },
            {
                _id: 14,
                name: "Forensic & Medicolegal Medical Specialist"
            },
            {
                _id: 15,
                name: "Clinical Pharmacology Specialist"
            },
            {
                _id: 16,
                name: "Clinical Nutrition Specialist"
            },
            {
                _id: 17,
                name: "Clinical Nutrition Specialist"
            },
            {
                _id: 18,
                name: "Specialist Heart and Blood Vessels"
            },
            {
                _id: 19,
                name: "Specialist Heart and Blood Vessels"
            },
            {
                _id: 20,
                name: "Specialist Heart and Blood Vessels"
            },
            {
                _id: 21,
                name: "Specialist of Physical Medicine and Rehabilitation"
            },
            {
                _id: 22,
                name: "Dental Conservation Specialist"
            },
            {
                _id: 23,
                name: "Dental Conservation Specialist"
            },
            {
                _id: 24,
                name: "Specialist Dentistry of Children"
            },
            {
                _id: 25,
                name: "Specialist Dentistry of Children"
            },
            {
                _id: 26,
                name: "Mental Medicine or Psychiatric Specialist"
            },
            {
                _id: 27,
                name: "Aviation Medical Specialist"
            },
            {
                _id: 28,
                name: "Specialist Skin and Gynecologist"
            },
            {
                _id: 29,
                name: "Emergency Medic Specialist"
            },
            {
                _id: 30,
                name: "Nuclear Medicine Specialist"
            },
            {
                _id: 31,
                name: "Sports Medicine Specialist"
            },
            {
                _id: 32,
                name: "Primary Service Specialist"
            },
            {
                _id: 33,
                name: "Eye specialist"
            },
            {
                _id: 34,
                name: "Clinical Microbiology Specialist"
            },
            {
                _id: 35,
                name: "Obstetrics & Gynecology Specialist"
            },
            {
                _id: 36,
                name: "Occupational Medical Specialist"
            },
            {
                _id: 37,
                name: "Radiation Oncologist Specialist"
            },
            {
                _id: 38,
                name: "Orthodontics Specialist"
            },
            {
                _id: 39,
                name: "Orthopedic and Traumatology Surgery Specialist"
            },
            {
                _id: 40,
                name: "Pulmonology Specialist and Respiratory Medicine"
            },
            {
                _id: 41,
                name: "Clinical Parasitology Specialist"
            },
            {
                _id: 42,
                name: "Specialist Periodontics"
            },
            {
                _id: 43,
                name: "Anatomy Pathology Specialist"
            },
            {
                _id: 44,
                name: "Internal Medicine Specialist"
            },
            {
                _id: 44,
                name: "Clinical Pathology Specialist"
            },
            {
                _id: 44,
                name: "Oral Disease Specialist"
            },
            {
                _id: 45,
                name: "Prosthodontics Specialist"
            },
            {
                _id: 46,
                name: "Radiology Specialist"
            },
            {
                _id: 47,
                name: "Radiology Specialist"
            },
            {
                _id: 48,
                name: "Dental Radiology Specialist"
            },
            {
                _id: 49,
                name: "Dental Radiology Specialist"
            },
            {
                _id: 50,
                name: "Neurologis"
            },
            {
                _id: 51,
                name: "Ear Specialist Nose Throat-Head Surgery Neck"
            },
            {
                _id: 52,
                name: "Spesialis Urologi"
            }
        ], next);

    },

    down(db, next) {
        // TODO write the statements to rollback your migration (if possible)
        next();
    }

};