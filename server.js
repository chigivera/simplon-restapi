const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// GET all Entreprises
app.get("/entreprises", async (req, res) => {
  try {
    const entreprises = await prisma.entreprise.findMany();
    res.json(entreprises);
  } catch (error) {
    console.error("Error fetching entreprises:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET a specific Entreprise by ID
app.get("/entreprise/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const entreprise = await prisma.entreprise.findUnique({
      where: { id: parseInt(id) },
    });
    if (!entreprise) {
      res.status(404).json({ error: "Entreprise not found" });
    } else {
      res.json(entreprise);
    }
  } catch (error) {
    console.error("Error fetching entreprise:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST a new Entreprise
app.post("/entreprise", async (req, res) => {
  const { nom, siegeSocial, dateCreation, identifiantFiscal, capital, nombreEmployes, ville, responsable, telephone, email } = req.body;
  try {
    const newEntreprise = await prisma.entreprise.create({
      data: {
        nom,
        siegeSocial,
        dateCreation: new Date(dateCreation),
        identifiantFiscal,
        capital,
        nombreEmployes,
        ville,
        responsable,
        telephone,
        email,
      },
    });
    res.json(newEntreprise);
  } catch (error) {
    console.error("Error creating entreprise:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET all Produits
app.get("/produits", async (req, res) => {
    try {
      const produits = await prisma.produit.findMany();
      res.json(produits);
    } catch (error) {
      console.error("Error fetching produits:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // GET a specific Produit by ID
  app.get("/produit/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const produit = await prisma.produit.findUnique({
        where: { id: parseInt(id) },
      });
      if (!produit) {
        res.status(404).json({ error: "Produit not found" });
      } else {
        res.json(produit);
      }
    } catch (error) {
      console.error("Error fetching produit:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  // POST a new Produit
app.post("/produit", async (req, res) => {
  const {
    nom,
    prixAchat,
    prixVente,
    tauxMarge,
    dimension,
    taille
  } = req.body;
  try {
    const newProduit = await prisma.produit.create({
      data: {
        nom,
        prixAchat,
        prixVente,
        tauxMarge,
        dimension,
        taille
      },
    });
    res.json(newProduit);
  } catch (error) {
    console.error("Error creating produit:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

  // GET all Clients
app.get("/clients", async (req, res) => {
    try {
      const clients = await prisma.client.findMany();
      res.json(clients);
    } catch (error) {
      console.error("Error fetching clients:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // GET a specific Client by ID
  app.get("/client/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const client = await prisma.client.findUnique({
        where: { id: parseInt(id) },
      });
      if (!client) {
        res.status(404).json({ error: "Client not found" });
      } else {
        res.json(client);
      }
    } catch (error) {
      console.error("Error fetching client:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // POST a new Client
  app.post("/client", async (req, res) => {
    const { nom, prenom, adresse, ville, telephone, email } = req.body;
    try {
      const newClient = await prisma.client.create({
        data: {
          nom,
          prenom,
          adresse,
          ville,
          telephone,
          email,
        },
      });
      res.json(newClient);
    } catch (error) {
      console.error("Error creating client:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

// GET all Fournisseurs
app.get("/fournisseurs", async (req, res) => {
    try {
      const fournisseurs = await prisma.fournisseur.findMany();
      res.json(fournisseurs);
    } catch (error) {
      console.error("Error fetching fournisseurs:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // GET a specific Fournisseur by ID
  app.get("/fournisseur/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const fournisseur = await prisma.fournisseur.findUnique({
        where: { id: parseInt(id) },
      });
      if (!fournisseur) {
        res.status(404).json({ error: "Fournisseur not found" });
      } else {
        res.json(fournisseur);
      }
    } catch (error) {
      console.error("Error fetching fournisseur:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // POST a new Fournisseur
  app.post("/fournisseur", async (req, res) => {
    const { nom, adresse, ville, telephone, email } = req.body;
    try {
      const newFournisseur = await prisma.fournisseur.create({
        data: {
          nom,
          adresse,
          ville,
          telephone,
          email,
        },
      });
      res.json(newFournisseur);
    } catch (error) {
      console.error("Error creating fournisseur:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  // GET all Factures
app.get("/factures", async (req, res) => {
    try {
      const factures = await prisma.facture.findMany();
      res.json(factures);
    } catch (error) {
      console.error("Error fetching factures:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // GET a specific Facture by ID
  app.get("/facture/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const facture = await prisma.facture.findUnique({
        where: { id: parseInt(id) },
      });
      if (!facture) {
        res.status(404).json({ error: "Facture not found" });
      } else {
        res.json(facture);
      }
    } catch (error) {
      console.error("Error fetching facture:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // POST a new Facture
  app.post("/facture", async (req, res) => {
    const { entrepriseId, clientId, date } = req.body;
    try {
      const newFacture = await prisma.facture.create({
        data: {
          entrepriseId,
          clientId,
          date: new Date(date),
        },
      });
      res.json(newFacture);
    } catch (error) {
      console.error("Error creating facture:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
// GET all Approvisionnements
app.get("/approvisionnements", async (req, res) => {
    try {
      const approvisionnements = await prisma.approvisionnement.findMany();
      res.json(approvisionnements);
    } catch (error) {
      console.error("Error fetching approvisionnements:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // GET a specific Approvisionnement by ID
  app.get("/approvisionnement/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const approvisionnement = await prisma.approvisionnement.findUnique({
        where: { id: parseInt(id) },
      });
      if (!approvisionnement) {
        res.status(404).json({ error: "Approvisionnement not found" });
      } else {
        res.json(approvisionnement);
      }
    } catch (error) {
      console.error("Error fetching approvisionnement:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // POST a new Approvisionnement
  app.post("/approvisionnement", async (req, res) => {
    const { entrepriseId, fournisseurId, date } = req.body;
    try {
      const newApprovisionnement = await prisma.approvisionnement.create({
        data: {
          entrepriseId,
          fournisseurId,
          date: new Date(date),
        },
      });
      res.json(newApprovisionnement);
    } catch (error) {
      console.error("Error creating approvisionnement:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
// POST a new LigneApprovisionnement
app.post("/ligneapprovisionnement", async (req, res) => {
    const { approvisionnementId, produitId, quantite } = req.body;
    try {
      const newLigneApprovisionnement = await prisma.ligneApprovisionnement.create({
        data: {
          approvisionnementId,
          produitId,
          quantite,
        },
      });
      res.json(newLigneApprovisionnement);
    } catch (error) {
      console.error("Error creating ligne approvisionnement:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
 // GET all lignes d'approvisionnement
app.get("/ligneapprovisionnement", async (req, res) => {
  try {
    const lignesApprovisionnement = await prisma.ligneApprovisionnement.findMany();
    res.json(lignesApprovisionnement);
  } catch (error) {
    console.error("Error fetching lignes d'approvisionnement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET a specific ligne d'approvisionnement by ID
app.get("/ligneapprovisionnement/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ligneApprovisionnement = await prisma.ligneApprovisionnement.findUnique({
      where: { id: parseInt(id) },
    });
    if (!ligneApprovisionnement) {
      res.status(404).json({ error: "Ligne d'approvisionnement not found" });
      return;
    }
    res.json(ligneApprovisionnement);
  } catch (error) {
    console.error("Error fetching ligne d'approvisionnement by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST a new LigneFacture
app.post("/lignefacture", async (req, res) => {
    const { factureId, produitId, quantite } = req.body;
    try {
      const newLigneFacture = await prisma.ligneFacture.create({
        data: {
          factureId,
          produitId,
          quantite,
        },
      });
      res.json(newLigneFacture);
    } catch (error) {
      console.error("Error creating ligne facture:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  // GET all lignes de facture
app.get("/lignefacture", async (req, res) => {
  try {
    const lignesFacture = await prisma.ligneFacture.findMany();
    res.json(lignesFacture);
  } catch (error) {
    console.error("Error fetching lignes de facture:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET a specific ligne de facture by ID
app.get("/lignefacture/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ligneFacture = await prisma.ligneFacture.findUnique({
      where: { id: parseInt(id) },
    });
    if (!ligneFacture) {
      res.status(404).json({ error: "Ligne de facture not found" });
      return;
    }
    res.json(ligneFacture);
  } catch (error) {
    console.error("Error fetching ligne de facture by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// DELETE an Entreprise by ID
app.delete("/entreprise/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.entreprise.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Entreprise deleted successfully" });
  } catch (error) {
    console.error("Error deleting entreprise:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a Produit by ID
app.delete("/produit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.produit.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Produit deleted successfully" });
  } catch (error) {
    console.error("Error deleting produit:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a Client by ID
app.delete("/client/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.client.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    console.error("Error deleting client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a Fournisseur by ID
app.delete("/fournisseur/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.fournisseur.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Fournisseur deleted successfully" });
  } catch (error) {
    console.error("Error deleting fournisseur:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a Facture by ID
app.delete("/facture/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.facture.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Facture deleted successfully" });
  } catch (error) {
    console.error("Error deleting facture:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE an Approvisionnement by ID
app.delete("/approvisionnement/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.approvisionnement.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Approvisionnement deleted successfully" });
  } catch (error) {
    console.error("Error deleting approvisionnement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a LigneApprovisionnement by ID
app.delete("/ligneapprovisionnement/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.ligneApprovisionnement.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Ligne approvisionnement deleted successfully" });
  } catch (error) {
    console.error("Error deleting ligne approvisionnement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a LigneFacture by ID
app.delete("/lignefacture/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.ligneFacture.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Ligne facture deleted successfully" });
  } catch (error) {
    console.error("Error deleting ligne facture:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE an Entreprise by ID
app.put("/entreprise/:id", async (req, res) => {
  const { id } = req.params;
  const { nom, siegeSocial, dateCreation, identifiantFiscal, capital, nombreEmployes, ville, responsable, telephone, email } = req.body;
  try {
    const updatedEntreprise = await prisma.entreprise.update({
      where: { id: parseInt(id) },
      data: {
        nom,
        siegeSocial,
        dateCreation: new Date(dateCreation),
        identifiantFiscal,
        capital,
        nombreEmployes,
        ville,
        responsable,
        telephone,
        email,
      },
    });
    res.json(updatedEntreprise);
  } catch (error) {
    console.error("Error updating entreprise:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE a Produit by ID
app.put("/produit/:id", async (req, res) => {
  const { id } = req.params;
  const { nom, prixAchat, prixVente, tauxMarge, dimension, taille } = req.body;
  try {
    const updatedProduit = await prisma.produit.update({
      where: { id: parseInt(id) },
      data: {
        nom,
        prixAchat,
        prixVente,
        tauxMarge,
        dimension,
        taille
      },
    });
    res.json(updatedProduit);
  } catch (error) {
    console.error("Error updating produit:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE a Client by ID
app.put("/client/:id", async (req, res) => {
  const { id } = req.params;
  const { nom, prenom, adresse, ville, telephone, email } = req.body;
  try {
    const updatedClient = await prisma.client.update({
      where: { id: parseInt(id) },
      data: {
        nom,
        prenom,
        adresse,
        ville,
        telephone,
        email,
      },
    });
    res.json(updatedClient);
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE a Fournisseur by ID
app.put("/fournisseur/:id", async (req, res) => {
  const { id } = req.params;
  const { nom, adresse, ville, telephone, email } = req.body;
  try {
    const updatedFournisseur = await prisma.fournisseur.update({
      where: { id: parseInt(id) },
      data: {
        nom,
        adresse,
        ville,
        telephone,
        email,
      },
    });
    res.json(updatedFournisseur);
  } catch (error) {
    console.error("Error updating fournisseur:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE a Facture by ID
app.put("/facture/:id", async (req, res) => {
  const { id } = req.params;
  const { entrepriseId, clientId, date } = req.body;
  try {
    const updatedFacture = await prisma.facture.update({
      where: { id: parseInt(id) },
      data: {
        entrepriseId,
        clientId,
        date: new Date(date),
      },
    });
    res.json(updatedFacture);
  } catch (error) {
    console.error("Error updating facture:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE an Approvisionnement by ID
app.put("/approvisionnement/:id", async (req, res) => {
  const { id } = req.params;
  const { entrepriseId, fournisseurId, date } = req.body;
  try {
    const updatedApprovisionnement = await prisma.approvisionnement.update({
      where: { id: parseInt(id) },
      data: {
        entrepriseId,
        fournisseurId,
        date: new Date(date),
      },
    });
    res.json(updatedApprovisionnement);
  } catch (error) {
    console.error("Error updating approvisionnement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE a LigneApprovisionnement by ID
app.put("/ligneapprovisionnement/:id", async (req, res) => {
  const { id } = req.params;
  const { approvisionnementId, produitId, quantite } = req.body;
  try {
    const updatedLigneApprovisionnement = await prisma.ligneApprovisionnement.update({
      where: { id: parseInt(id) },
      data: {
        approvisionnementId,
        produitId,
        quantite,
      },
    });
    res.json(updatedLigneApprovisionnement);
  } catch (error) {
    console.error("Error updating ligne approvisionnement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE a LigneFacture by ID
app.put("/lignefacture/:id", async (req, res) => {
  const { id } = req.params;
  const { factureId, produitId, quantite } = req.body;
  try {
    const updatedLigneFacture = await prisma.ligneFacture.update({
      where: { id: parseInt(id) },
      data: {
        factureId,
        produitId,
        quantite,
      },
    });
    res.json(updatedLigneFacture);
  } catch (error) {
    console.error("Error updating ligne facture:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
