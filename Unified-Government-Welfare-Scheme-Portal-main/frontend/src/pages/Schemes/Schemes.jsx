import React, { useState } from "react";
import "../../styles/Schemes.css";

const AllSchemesPage = () => {
  const [filters, setFilters] = useState({
    search: "",
    age: "",
    gender: "",
    city: "",
  });

  const [selectedScheme, setSelectedScheme] = useState(null);

  const schemes = [
    {
      id: "pmss",
      name: "Post Matric Scholarship",
      moreInfo: "https://scholarships.gov.in/postmatric",
      eligibility:
        "Must be from an economically weaker section and belong to SC/ST/OBC category.",
      applyLink: "https://scholarships.gov.in/apply/postmatric",
      age: "17",
      gender: "any",
      city: "any",
    },
    {
      id: "kalyana-lakshmi",
      name: "Kalyana Lakshmi Scheme",
      moreInfo: "https://telangana.gov.in/Kalyana-Lakshmi",
      eligibility:
        "Bride must belong to SC/ST/BC and family income must be below ₹2 lakhs/year.",
      applyLink: "https://telanganaepass.cgg.gov.in/",
      age: "18",
      gender: "female",
      city: "any",
    },
    {
      id: "pmay",
      name: "PM Awas Yojana (Urban)",
      moreInfo: "https://pmaymis.gov.in",
      eligibility:
        "Beneficiary should not own a pucca house. Must meet income and family criteria.",
      applyLink: "https://pmaymis.gov.in",
      age: "any",
      gender: "any",
      city: "any",
    },
    {
      id: "aayushman",
      name: "Ayushman Bharat",
      moreInfo: "https://www.pmjay.gov.in",
      eligibility:
        "Must be listed under SECC 2011 database and hold a BPL card.",
      applyLink: "https://www.pmjay.gov.in",
      age: "any",
      gender: "any",
      city: "any",
    },
  ];

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch = scheme.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesAge =
      filters.age === "" ||
      scheme.age === "any" ||
      parseInt(filters.age) >= parseInt(scheme.age);
    const matchesGender =
      filters.gender === "" ||
      scheme.gender === "any" ||
      scheme.gender.toLowerCase() === filters.gender.toLowerCase();
    const matchesCity =
      filters.city === "" ||
      scheme.city === "any" ||
      scheme.city.toLowerCase() === filters.city.toLowerCase();

    return matchesSearch && matchesAge && matchesGender && matchesCity;
  });

  return (
    <div className="all-schemes-page">
      <h2>Available Government Schemes</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search schemes..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={filters.age}
          onChange={(e) => setFilters({ ...filters, age: e.target.value })}
        />
        <select
          value={filters.gender}
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          placeholder="City"
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
        />
      </div>

      <div className="scheme-grid">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme) => (
            <div key={scheme.id} className="scheme-card">
              <h3>{scheme.name}</h3>
              <div className="card-buttons">
                <button onClick={() => setSelectedScheme(scheme)}>More Info</button>
                <button onClick={() => alert(`Eligibility: ${scheme.eligibility}`)}>
                  Check Eligibility
                </button>
                <button onClick={() => window.open(scheme.applyLink, "_blank")}>
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No schemes match the selected filters.</p>
        )}
      </div>

      {selectedScheme && (
        <div className="popup-overlay" onClick={() => setSelectedScheme(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedScheme.name}</h3>
            <p><strong>ID:</strong> {selectedScheme.id}</p>
            <p><strong>Eligibility:</strong> {selectedScheme.eligibility}</p>
            <p><strong>Age:</strong> {selectedScheme.age}</p>
            <p><strong>Gender:</strong> {selectedScheme.gender}</p>
            <p><strong>City:</strong> {selectedScheme.city}</p>
            <p>
              <strong>More Info:</strong>{" "}
              <a href={selectedScheme.moreInfo} target="_blank" rel="noreferrer">
                {selectedScheme.moreInfo}
              </a>
            </p>
            <button onClick={() => setSelectedScheme(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllSchemesPage;
